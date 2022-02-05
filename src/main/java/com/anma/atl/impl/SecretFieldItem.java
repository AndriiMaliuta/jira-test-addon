package com.anma.atl.impl;

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
        Issue currentIssue = (Issue) jiraHelper.getContextParams().get("issue");



        return context;
    }
}
