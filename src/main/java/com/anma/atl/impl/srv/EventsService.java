package com.anma.atl.impl.srv;

import com.anma.atl.impl.models.IssueEventModel;

import java.util.List;

public interface EventsService {

//    public void createEventRecord(String type, String issueId, String issKey, String[] field, String userKey, String userName);

    public void createEventRecord(String type, String issueId, String issKey, String[] field,
                           String userKey, String userName, String time);

    List<IssueEventModel> getAll();
}
