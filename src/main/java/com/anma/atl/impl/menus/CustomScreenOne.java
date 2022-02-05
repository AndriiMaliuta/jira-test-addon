package com.anma.atl.impl.menus;

import com.anma.atl.impl.srv.EventsService;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.templaterenderer.TemplateRenderer;

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

    @Inject
    public CustomScreenOne(@ComponentImport TemplateRenderer templateRenderer,
                           EventsService eventsService) {
        this.templateRenderer = templateRenderer;
        this.eventsService = eventsService;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Map<String, Object> context = new HashMap<>();

        context.put("contextPath", req.getContextPath());
        context.put("records", eventsService.getAll());

        templateRenderer.render("templates/menus/custom-screen-one.vm", context, resp.getWriter());


    }
}
