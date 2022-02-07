package scripts.groovy.absences

import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.event.type.EventDispatchOption
import com.atlassian.jira.issue.MutableIssue
import com.atlassian.jira.issue.worklog.WorklogImpl
import com.atlassian.jira.user.ApplicationUser

import static groovy.utils.Constants.*
import static groovy.utils.ScriptUtils.getCustomFieldValue
import static java.lang.Integer.parseInt

MutableIssue currentIssue = issue

if (!currentIssue.subTask) {
    Date overtimeDate = getCustomFieldValue(currentIssue, OVERTIME_DATE) as Date
    ApplicationUser user = getCustomFieldValue(currentIssue, USER) as ApplicationUser
    String overtimeHours = getCustomFieldValue(currentIssue, OVERTIME_HOURS)
    String[] overtimeHoursParts = overtimeHours.split(":")
    long overtimeSeconds = parseInt(overtimeHoursParts[0]) * 3600 + (parseInt(overtimeHoursParts[1]) * 60)

    WorklogImpl worklog = new WorklogImpl(ComponentAccessor.worklogManager, currentIssue, null, user.key, currentIssue.summary, overtimeDate, null, null, overtimeSeconds)
    ComponentAccessor.worklogManager.create(user, worklog, 0L, false)
    currentIssue.setTimeSpent(overtimeSeconds)
    ComponentAccessor.issueManager.updateIssue(ComponentAccessor.jiraAuthenticationContext.getLoggedInUser(), currentIssue, EventDispatchOption.DO_NOT_DISPATCH, false)
}
