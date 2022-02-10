package com.anma.atl.impl.models;

import net.java.ao.Entity;
import net.java.ao.Preload;
import net.java.ao.schema.Table;

@Preload
@Table("ANMCustomUpdates")
public interface IssueEventModel extends Entity {

    void setEventType(String type);
    String getEventType();
    void setIssueId(String pageName);
    String getIssueId();
    void setIssueKey(String issueKey);
    String getIssueKey();
    void setFields(String fields);
    String getFields();
    void setUserKey(String userKey);
    String getUserKey();
    void setUserName(String userName);
    String getUserName();
    void setTime(String time);
    String getTime();

}
