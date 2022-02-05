package com.anma.atl.impl.evt;

import com.atlassian.event.api.EventListener;
import com.atlassian.event.api.EventPublisher;
import com.atlassian.jira.event.issue.field.CustomFieldUpdatedEvent;
import com.atlassian.sal.api.user.UserManager;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FieldUpdatedEvent implements InitializingBean, DisposableBean {

    private final EventPublisher eventPublisher;
    private final UserManager userManager;

    @Autowired
    public FieldUpdatedEvent(EventPublisher eventPublisher, UserManager userManager) {
        this.eventPublisher = eventPublisher;
        this.userManager = userManager;
    }

    @EventListener
    public void handleEvent(CustomFieldUpdatedEvent event) {
        event.getOriginalCustomField();
        userManager.getRemoteUser();
    }

    @Override
    public void afterPropertiesSet() throws Exception {

    }

    @Override
    public void destroy() throws Exception {
        eventPublisher.unregister(this);
    }
}
