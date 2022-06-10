package scripts.groovy.absences

import com.atlassian.jira.bc.issue.search.SearchService
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue
import com.atlassian.jira.issue.customfields.option.Option
import com.atlassian.jira.issue.search.SearchResults
import com.atlassian.jira.jql.builder.JqlQueryBuilder
import com.atlassian.jira.user.ApplicationUser
import com.atlassian.jira.web.bean.PagerFilter
import com.atlassian.query.Query
import com.opensymphony.workflow.InvalidInputException
import groovy.transform.Field

import java.util.stream.Collectors

import static com.atlassian.jira.component.ComponentAccessor.jiraAuthenticationContext
import static com.atlassian.query.order.SortOrder.ASC
import static groovy.utils.Constants.*
import static groovy.utils.ScriptUtils.getCustomFieldValue
import static org.apache.commons.lang.time.DateFormatUtils.ISO_DATE_FORMAT

@Field Long WHO_IS_TRAVELING_CF_ID = 26614L
@Field Long MEDICAL_EXAMINATION_DATE = 28702L
@Field long SICK_LEAVE_TYPE_CF = 14106L
@Field String MEDICAL_EXAMINATION = "Medical Examination"
@Field List<String> ABSENCES_ALLOWED_DURING_BUSINESS_TRIP = [SICK_LEAVE, VACATION, PAID_TIME_OFF, UNPAID_LEAVE, "Social Leave"]

Issue currentIssue = issue

if (!currentIssue.subTask) {
    Date from = getCustomFieldValue(currentIssue, DATE_FROM) as Date
    Date to = getCustomFieldValue(currentIssue, DATE_TO) as Date
    ApplicationUser user = getCustomFieldValue(currentIssue, USER) as ApplicationUser

    if (user) {
        Date medExamDate = isMedicalExamination(currentIssue) ?
                getCustomFieldValue(currentIssue, MEDICAL_EXAMINATION_DATE) as Date :
                null
        validateAllAbsences(currentIssue, user, from, to, medExamDate)
    } else {
        validateBusinessTrip(currentIssue, from, to)
    }
}

private void validateAllAbsences(Issue currentIssue, ApplicationUser user, Date from, Date to, Date medExamDate) {
    List<Issue> absenceIssues = medExamDate ?
            getAbsenceIssuesForPeriod(user, medExamDate, medExamDate) :
            getAbsenceIssuesForPeriod(user, from, to)
    if (!absenceIssues.empty && isNotAllowedAbsenceDuringBusinessTrip(currentIssue, absenceIssues)) {
        String errorMessage = 'You have already create absences for this period: '
        errorMessage += absenceIssues.stream().map({ issue -> issue.key }).collect(Collectors.joining(", "))
        throw new InvalidInputException(errorMessage)
    }
}

private void validateBusinessTrip(Issue currentIssue, Date from, Date to) {
    ApplicationUser traveler = getCustomFieldValue(currentIssue, WHO_IS_TRAVELING_CF_ID) as ApplicationUser
    List<Issue> absenceIssues = getAbsenceIssuesForPeriod(traveler, from, to)
    if (!absenceIssues.empty) {
        String existenceIssueKeys = absenceIssues.stream().map({ issue -> issue.key }).collect(Collectors.joining())
        String errorMessage = "Some of listed users have already created absence! (${existenceIssueKeys})"
        throw new InvalidInputException(errorMessage)
    }
}

private List<Issue> getAbsenceIssuesForPeriod(ApplicationUser user, Date from, Date to) {
    SearchService searchService = ComponentAccessor.getComponent(SearchService.class)
    def query = buildJQL(user, from, to)
    SearchResults<Issue> results = searchService.search(jiraAuthenticationContext.getLoggedInUser(), query, PagerFilter.getUnlimitedFilter())
    results == null ? Collections.emptyList() : results.results
}

private Query buildJQL(ApplicationUser user, Date from, Date to) {
    final JqlQueryBuilder builder = JqlQueryBuilder.newBuilder()
    String dateFrom = ISO_DATE_FORMAT.format(from)
    String dateTo = ISO_DATE_FORMAT.format(to)

    builder.where().project().eq("ABS")
            .and().status().notIn("Canceled", "Declined")
            .and().issueType().notIn(OVERTIME, ON_CALL)
            .and()
            .sub()
            .sub().customField(DATE_FROM).ltEq(dateFrom).and().customField(DATE_TO).gtEq(dateFrom).endsub()
            .or().sub().customField(DATE_FROM).ltEq(dateTo).and().customField(DATE_TO).gtEq(dateTo).endsub()
            .or().sub().customField(DATE_FROM).gt(dateFrom).and().customField(DATE_TO).lt(dateTo).endsub()
            .or().sub().customField(MEDICAL_EXAMINATION_DATE).gtEq(dateFrom).and().customField(MEDICAL_EXAMINATION_DATE).ltEq(dateTo).endsub()
            .endsub()
            .and().sub().customField(USER).in(user.name).or().customField(WHO_IS_TRAVELING_CF_ID).in(user.name).endsub()
            .and().not().issueTypeIsSubtask()
    builder.orderBy().createdDate(ASC)

    return builder.buildQuery()
}

private boolean isMedicalExamination(Issue currentIssue) {
    def slType = getCustomFieldValue(currentIssue, SICK_LEAVE_TYPE_CF) as Option
    SICK_LEAVE.equals(currentIssue.issueType.name) && ['Medical examination for employee', 'Medical examination for relative'].contains(slType?.value)
}

boolean isNotAllowedAbsenceDuringBusinessTrip(Issue currentIssue, List<Issue> issues) {
    def onlyBusinessTripsScheduledBefore = !issues.stream().anyMatch({ issue -> !BUSINESS_TRIP.equals(issue.issueType.name) })
    !(ABSENCES_ALLOWED_DURING_BUSINESS_TRIP.contains(currentIssue.issueType.name) && onlyBusinessTripsScheduledBefore)
}