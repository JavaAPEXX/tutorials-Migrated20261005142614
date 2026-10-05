package com.baeldung.javaeeannotations;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;

@WebListener
public class BankAppServletContextListener implements ServletContextListener {

    public void contextInitialized(ServletContextEvent sce) { 
        sce.getServletContext().setAttribute("ATTR_DEFAULT_LANGUAGE", "english"); 
    } 
    
    public void contextDestroyed(ServletContextEvent sce) { 
        System.out.println("CONTEXT DESTROYED"); 
    } 
}
