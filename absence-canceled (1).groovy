package scripts.groovy.absences

import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.event.type.EventDispatchOption
import com.atlassian.jira.issue.Issue
import com.atlassian.jira.issue.MutableIssue
import com.atlassian.jira.user.ApplicationUser
import groovy.transform.Field

import static groovy.utils.ScriptUtils.updateParentTaskIfNecessary
import static org.apache.commons.lang.StringUtils.equalsIgnoreCase

@Field
List<String> ON_CALL = ["Sub-Task On Call", "On Call"]

MutableIssue currentIssue = issue

if (ON_CALL.contains(currentIssue.issueType.name)) {
    if (currentIssue.subTask) {
        Collection<Issue> allSubTasksForCurrentAbsence = currentIssue.parentObject.subTaskObjects
        boolean shouldUpdateParentIssue = true
        if (allSubTasksForCurrentAbsence.size() > 1) {
            allSubTasksForCurrentAbsence.each {
                if (it.id != currentIssue.id
                        && !equalsIgnoreCase("approved", it.status.name)
                        && !equalsIgnoreCase("canceled", it.status.name)
                        && !(equalsIgnoreCase("declined", it.status.name))) {
                    shouldUpdateParentIssue = false
                }
            }
        }
        if (shouldUpdateParentIssue) {
            MutableIssue parentTask = currentIssue.parentObject as MutableIssue
            parentTask.setReporter(currentIssue.reporter)
            ApplicationUser internalTeam = ComponentAccessor.userManager.getUserByName('internalteam')
            parentTask.setAssignee(internalTeam)
            ComponentAccessor.issueManager.updateIssue(ComponentAccessor.jiraAuthenticationContext.getLoggedInUser(), parentTask, EventDispatchOption.ISSUE_UPDATED, true)
        }
    }
} else {
    updateParentTaskIfNecessary(currentIssue)
}