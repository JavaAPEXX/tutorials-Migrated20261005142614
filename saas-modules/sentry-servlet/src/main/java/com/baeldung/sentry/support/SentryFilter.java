package com.baeldung.sentry.support;

import java.io.IOException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletResponse;

import io.sentry.Sentry;
import io.sentry.SentryLevel;

@WebFilter(urlPatterns = "/*")
public class SentryFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        try {
            chain.doFilter(request, response);
            int rc = ((HttpServletResponse) response).getStatus();
            if (rc / 100 == 5) {
                Sentry.captureMessage("Application error: code=" + rc, SentryLevel.ERROR);
            }
        } catch (Throwable t) {
            Sentry.captureException(t);
            throw t;
        }
    }
}
