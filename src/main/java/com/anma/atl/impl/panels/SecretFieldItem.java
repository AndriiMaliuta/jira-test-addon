package com.anma.atl.impl.panels;

import com.atlassian.jira.event.issue.field.CustomFieldUpdatedEvent;
import com.atlassian.jira.issue.Issue;
import com.atlassian.jira.plugin.webfragment.contextproviders.AbstractJiraContextProvider;
import com.atlassian.jira.plugin.webfragment.model.JiraHelper;
import com.atlassian.jira.user.ApplicationUser;

import java.util.HashMap;
import java.util.Map;

public class SecretFieldItem extends AbstractJiraContextProvider {

    @Override
    public Map getContextMap(ApplicationUser applicationUser, JiraHelper jiraHelper) {

        Map<String, Object> context = new HashMap<>();
        String contextPath = jiraHelper.getRequest().getContextPath();

        Issue currentIssue = (Issue) jiraHelper.getContextParams().get("issue");

        Long projectId = jiraHelper.getProject().getId();
        String projKey = jiraHelper.getProject().getKey();
        String projName = jiraHelper.getProject().getName();

        context.put("contextPath", contextPath);
        context.put("projectId", projectId);
        context.put("projKey", projKey);
        context.put("projName", projName);
        context.put("issueKey", currentIssue.getKey());

        return context;
    }
}
