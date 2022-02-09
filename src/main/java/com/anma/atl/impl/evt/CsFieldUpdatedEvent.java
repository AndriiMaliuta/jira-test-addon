package com.anma.atl.impl.evt;

import com.anma.atl.impl.srv.EventsService;
import com.atlassian.event.api.EventListener;
import com.atlassian.event.api.EventPublisher;
import com.atlassian.jira.event.config.IssueTypeUpdatedEvent;
import com.atlassian.jira.event.issue.IssueChangedEvent;
import com.atlassian.jira.event.issue.field.CustomFieldUpdatedEvent;
import com.atlassian.jira.issue.Issue;
import com.atlassian.jira.issue.IssueManager;
import com.atlassian.jira.issue.MutableIssue;
import com.atlassian.jira.user.ApplicationUser;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import com.atlassian.sal.api.user.UserManager;
import com.atlassian.sal.api.web.context.HttpContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CsFieldUpdatedEvent implements InitializingBean, DisposableBean {

    private final Logger LOG = LoggerFactory.getLogger(CsFieldUpdatedEvent.class);

    private final EventPublisher eventPublisher;
    private final UserManager userManager;
    private final EventsService eventsService;
    private final HttpContext httpContext;
    private final IssueManager issueManager;

    @Autowired
    public CsFieldUpdatedEvent(@JiraImport EventPublisher eventPublisher,
                               @JiraImport UserManager userManager,
                               EventsService eventsService,
                               @JiraImport HttpContext httpContext,
                               @JiraImport IssueManager issueManager) {
        this.eventPublisher = eventPublisher;
        this.userManager = userManager;
        this.eventsService = eventsService;
        this.httpContext = httpContext;
        this.issueManager = issueManager;
    }

    @EventListener
    public void handleEvent(CustomFieldUpdatedEvent event) {
        String issueId = httpContext.getRequest().getParameter("issueId");
        MutableIssue issue = issueManager.getIssueObject(issueId);

        String fieldId = event.getCustomField().getId();
        event.getOriginalCustomField();
        String userKey = userManager.getRemoteUser().getUserKey().getStringValue();
        String userName = userManager.getRemoteUser().getUsername();

        eventsService.createEventRecord("UPDATE", issueId, userKey, userName);

        LOG.info("Field " + fieldId + "of Issue " + issueId + " updated");
    }

    // issue type updated
    @EventListener
    public void handleEvent(IssueTypeUpdatedEvent event) {
        String issueId = httpContext.getRequest().getParameter("issueId");
        MutableIssue issue = issueManager.getIssueObject(issueId);

        String fieldId = event.getId();
        String id = event.getIssueType().getId();
        String description = event.getIssueType().getDescription();
        String userKey = userManager.getRemoteUser().getUserKey().getStringValue();
        String userName = userManager.getRemoteUser().getUsername();


        eventsService.createEventRecord("IS-UPDATE", issueId, userKey, userName);

        LOG.info("Field " + fieldId + "of Issue " + issueId + " updated");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        eventPublisher.register(this);
    }

    @EventListener
    public void handle(IssueChangedEvent event) {
        ApplicationUser user = event.getAuthor().get();
        Issue issue = event.getIssue();
        Long issueId = issue.getId();

        eventsService.createEventRecord("ISSUE-UPDATE", String.valueOf(issueId), user.getKey(), user.getName());

        LOG.info("issued " + issue.getKey() + " updated");
    }

    @Override
    public void destroy() throws Exception {
        eventPublisher.unregister(this);
    }
}
