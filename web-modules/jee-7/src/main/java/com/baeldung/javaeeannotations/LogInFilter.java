package com.baeldung.javaeeannotations;

import java.io.IOException;

import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/*@WebFilter(
  urlPatterns = "/bankAccount/*",
  filterName = "LogInFilter",
  description = "Filter all account transaction URLs"
  )*/
public class LogInFilter implements javax.servlet.Filter {
    
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        res.sendRedirect(req.getContextPath() + "/login.jsp");
        chain.doFilter(request, response);
    }

    public void destroy() {
        
    }

}
