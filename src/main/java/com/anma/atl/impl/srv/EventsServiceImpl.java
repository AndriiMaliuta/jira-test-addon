package com.anma.atl.impl.srv;

import com.anma.atl.impl.models.IssueEventModel;
import com.atlassian.activeobjects.external.ActiveObjects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventsServiceImpl implements EventsService {

    private final ActiveObjects activeObjects;

    @Autowired
    public EventsServiceImpl(ActiveObjects activeObjects) {
        this.activeObjects = activeObjects;
    }

    @Override
    public void createEventRecord(String issueId) {
        IssueEventModel model = activeObjects.create(IssueEventModel.class);
        model.setIssueId(issueId);
        model.save();
    }

    @Override
    public List<IssueEventModel> getAll() {
        return null;
    }
}
