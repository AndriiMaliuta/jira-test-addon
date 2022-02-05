package com.anma.atl.impl.models;

import net.java.ao.Entity;
import net.java.ao.Preload;
import net.java.ao.schema.Table;

@Preload
@Table("PDEModels")
public interface IssueEventModel extends Entity {

    void setIssueId(String pageName);
    String getIssueId();

}
