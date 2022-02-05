package com.anma.atl.impl.conditions;

import com.atlassian.jira.workflow.condition.AbstractJiraCondition;
import com.opensymphony.module.propertyset.PropertySet;
import com.opensymphony.workflow.WorkflowException;

import java.util.Map;

public class MenuViewCondition extends AbstractJiraCondition {

    @Override
    public boolean passesCondition(Map map, Map map1, PropertySet propertySet) throws WorkflowException {

        return false;
    }
}
