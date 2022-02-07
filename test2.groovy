package scripts.groovy.absences

import com.atlassian.jira.event.type.EventDispatchOption
import com.atlassian.jira.issue.MutableIssue
import com.atlassian.jira.issue.customfields.option.Option
import com.atlassian.jira.user.ApplicationUser
import groovy.transform.Field

import static com.atlassian.jira.component.ComponentAccessor.*
import static groovy.utils.Constants.TOTAL_DAYS
import static groovy.utils.Constants.USER
import static groovy.utils.ScriptUtils.*

@Field
long SICK_LEAVE_TYPE_CF = 14106L
@Field
String MEDICAL_EXAMINATION = "Medical Examination"

MutableIssue currentIssue = issue

if (!currentIssue.subTask) {
    ApplicationUser user = getCustomFieldValue(currentIssue, USER) as ApplicationUser

    if (isUSNonDeliveryEmployee(user)) {
        currentIssue.setAssignee(userManager.getUserByName("internalteam"))
    } else {
        currentIssue.setAssignee(userManager.getUserByName("cb_team"))
    }
    Option slType = getCustomFieldValue(currentIssue, SICK_LEAVE_TYPE_CF) as Option
    int total = ['Medical examination for employee', 'Medical examination for relative'].contains(slType.value) ? 1 : calculateTotalDays(currentIssue)
    updateCustomFieldValue(currentIssue, TOTAL_DAYS, total.toString())

    String fmName = getFunctionalManager(user.username)
    watcherManager.startWatching(userManager.getUserByName(fmName), currentIssue)
    if (!currentIssue.reporter.username.equals(user.username)) {
        watcherManager.startWatching(user, currentIssue)
    }

    issueManager.updateIssue(jiraAuthenticationContext.getLoggedInUser(), currentIssue, EventDispatchOption.DO_NOT_DISPATCH, false)
}
