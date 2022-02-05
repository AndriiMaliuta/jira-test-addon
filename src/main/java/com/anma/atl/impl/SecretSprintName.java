package com.anma.atl.impl;

import com.atlassian.jira.issue.customfields.impl.AbstractSingleFieldType;
import com.atlassian.jira.issue.customfields.impl.FieldValidationException;
import com.atlassian.jira.issue.customfields.manager.GenericConfigManager;
import com.atlassian.jira.issue.customfields.persistence.CustomFieldValuePersister;
import com.atlassian.jira.issue.customfields.persistence.PersistenceFieldType;
import com.atlassian.jira.issue.customfields.view.CustomFieldParams;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class SecretSprintName extends AbstractSingleFieldType<String> {

    public SecretSprintName(@JiraImport CustomFieldValuePersister customFieldValuePersister,
                            @JiraImport GenericConfigManager genericConfigManager) {
        super(customFieldValuePersister, genericConfigManager);
    }


    @Override
    public String getStringFromSingularObject(String s) {
        return null;
    }

    @Override
    public String getSingularObjectFromString(String s) throws FieldValidationException {
        return null;
    }

    @Override
    public Object getStringValueFromCustomFieldParams(CustomFieldParams parameters) {
        return super.getStringValueFromCustomFieldParams(parameters);
    }

    @Override
    protected PersistenceFieldType getDatabaseType() {
        return PersistenceFieldType.TYPE_LIMITED_TEXT;
    }

    @Nullable
    @Override
    protected Object getDbValueFromObject(String s) {
        return null;
    }

    @Nullable
    @Override
    protected String getObjectFromDbValue(@Nonnull Object o) throws FieldValidationException {
        return null;
    }


}
