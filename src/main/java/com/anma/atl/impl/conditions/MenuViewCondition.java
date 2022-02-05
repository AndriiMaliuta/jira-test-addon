package com.anma.atl.impl.conditions;

import com.atlassian.jira.bc.issue.IssueService;
import com.atlassian.jira.issue.MutableIssue;
import com.atlassian.jira.permission.ProjectPermissions;
import com.atlassian.jira.plugin.webfragment.conditions.AbstractIssueWebCondition;
import com.atlassian.jira.plugin.webfragment.model.JiraHelper;
import com.atlassian.jira.security.PermissionManager;
import com.atlassian.jira.user.ApplicationUser;
import com.atlassian.jira.user.UserUtils;
import com.atlassian.jira.workflow.condition.AbstractJiraCondition;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import com.atlassian.plugin.web.baseconditions.BaseCondition;
import com.opensymphony.module.propertyset.PropertySet;
import com.opensymphony.workflow.WorkflowException;

import java.util.Map;

public class MenuViewCondition extends AbstractIssueWebCondition {

    //AbstractJiraCondition


    private final PermissionManager permissionManager;
    private final IssueService issueService;

    public MenuViewCondition(@JiraImport PermissionManager permissionManager,
                             @JiraImport IssueService issueService) {
        this.permissionManager = permissionManager;
        this.issueService = issueService;
    }

    @Override
    public boolean shouldDisplay(ApplicationUser user, JiraHelper jiraHelper) {

        ApplicationUser admin = UserUtils.getUserManager().getUserByName("admin");

//        super.getIssue(params);

        IssueService.IssueResult issueResult = issueService.getIssue(admin, "");
        MutableIssue issue = issueResult.getIssue();

        permissionManager.hasPermission(ProjectPermissions.ADMINISTER_PROJECTS, issue, admin);

    }

//    @Override
//    public boolean passesCondition(Map map, Map map1, PropertySet propertySet) throws WorkflowException {
//
//
//
//        return false;
//    }
}
