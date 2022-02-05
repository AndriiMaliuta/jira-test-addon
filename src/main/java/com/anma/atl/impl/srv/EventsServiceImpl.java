package com.anma.atl.impl.srv;

import com.anma.atl.impl.models.IssueEventModel;
import com.atlassian.activeobjects.external.ActiveObjects;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class EventsServiceImpl implements EventsService {

    private final ActiveObjects activeObjects;

    @Autowired
    public EventsServiceImpl(@JiraImport ActiveObjects activeObjects) {
        this.activeObjects = activeObjects;
    }

    @Override
    public void createEventRecord(String type, String issueId, String userKey, String userName) {
        IssueEventModel model = activeObjects.create(IssueEventModel.class);
        model.setEventType("UPDATED");
        model.setIssueId(issueId);
        model.setUserKey(userKey);
        model.setUserName(userName);
        model.save();
    }

    @Override
    public List<IssueEventModel> getAll() {
        return Arrays.asList(activeObjects.find(IssueEventModel.class));
    }
}
