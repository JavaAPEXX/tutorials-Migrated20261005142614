package com.baeldung.structurizr.spring;

import org.springframework.stereotype.Controller;

import jakarta.annotation.Resource;

@Controller
public class PaymentController {
    @Resource
    private PaymentRepository repository;

    @Resource
    private GenericComponent component;
}
