package scripts.groovy.absences

import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue
import com.atlassian.jira.issue.MutableIssue
import com.atlassian.jira.issue.customfields.option.Option
import com.atlassian.jira.issue.worklog.WorklogImpl
import com.atlassian.jira.issue.worklog.WorklogManager
import com.atlassian.jira.user.ApplicationUser
import groovy.transform.Field

import static com.atlassian.jira.component.ComponentAccessor.issueManager
import static com.atlassian.jira.component.ComponentAccessor.jiraAuthenticationContext
import static com.atlassian.jira.event.type.EventDispatchOption.DO_NOT_DISPATCH
import static groovy.utils.Constants.SICK_LEAVE
import static groovy.utils.Constants.USER
import static groovy.utils.ScriptUtils.*

@Field String MEDICAL_EXAMINATION = "Medical Examination"
@Field long SICK_LEAVE_TYPE_CF = 14106L
@Field long EXAMINATION_HOURS_CF = 28703L
@Field Long MEDICAL_EXAMINATION_DATE = 28702L

MutableIssue currentIssue = issue
WorklogManager worklogManager = ComponentAccessor.worklogManager

if (!currentIssue.subTask) {
    ApplicationUser user = getCustomFieldValue(currentIssue, USER) as ApplicationUser

    if (isMedicalExamination(currentIssue)) {
        def medExamDate = getCustomFieldValue(currentIssue, MEDICAL_EXAMINATION_DATE) as Date
        String[] splitMedExamHours = (getCustomFieldValue(currentIssue, EXAMINATION_HOURS_CF) as String).split(":")
        long timeToLog = Integer.valueOf(splitMedExamHours[0]) * 3600 + Integer.valueOf(splitMedExamHours[1]) * 60
        WorklogImpl worklog = new WorklogImpl(worklogManager, currentIssue, null, user.key, currentIssue.summary, medExamDate, null, null, timeToLog)
        worklogManager.create(user, worklog, 0L, false)
        currentIssue.setTimeSpent(timeToLog)
    } else {
        Collection<Date> absenceDays = getAbsencesDays(currentIssue)
        long workingTimePerDay = isUserFromSupport(user) ? 12 * 3600 : 8 * 3600

        absenceDays.each {
            WorklogImpl worklog = new WorklogImpl(worklogManager, currentIssue, null, user.key, currentIssue.summary, it, null, null, workingTimePerDay)
            worklogManager.create(user, worklog, 0L, false)
        }
        currentIssue.setTimeSpent(workingTimePerDay * absenceDays.size())
    }

    issueManager.updateIssue(jiraAuthenticationContext.getLoggedInUser(), currentIssue, DO_NOT_DISPATCH, false)
}

private boolean isMedicalExamination(Issue currentIssue) {
    def slType = getCustomFieldValue(currentIssue, SICK_LEAVE_TYPE_CF) as Option
    SICK_LEAVE.equals(currentIssue.issueType.name) && ['Medical examination for employee', 'Medical examination for relative'].contains(slType?.value)
}