package com.anma.atl.impl.menus;

import com.anma.atl.impl.srv.EventsService;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import com.atlassian.templaterenderer.TemplateRenderer;
import com.atlassian.webresource.api.assembler.PageBuilderService;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CustomScreenOne extends HttpServlet {


    private final TemplateRenderer templateRenderer;
    private final EventsService eventsService;
    private PageBuilderService pageBuilderService;

    @Inject
    public CustomScreenOne(@ComponentImport TemplateRenderer templateRenderer,
                           EventsService eventsService,
                           @JiraImport PageBuilderService pageBuilderService) {
        this.templateRenderer = templateRenderer;
        this.eventsService = eventsService;
        this.pageBuilderService = pageBuilderService;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Map<String, Object> context = new HashMap<>();

//        pageBuilderService.assembler().resources().requireWebResource("com.anma.atl.jira-test:require-test-resource");

        context.put("contextPath", req.getContextPath());
        context.put("records", eventsService.getAll());

        templateRenderer.render("templates/menus/custom-screen-one.vm", context, resp.getWriter());


    }
}
