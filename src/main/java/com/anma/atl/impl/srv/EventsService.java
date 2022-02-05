package com.anma.atl.impl.srv;

import com.anma.atl.impl.models.IssueEventModel;

import java.util.List;

public interface EventsService {

    public void createEventRecord(String type, String issueId, String userKey, String userName);
    List<IssueEventModel> getAll();
}
