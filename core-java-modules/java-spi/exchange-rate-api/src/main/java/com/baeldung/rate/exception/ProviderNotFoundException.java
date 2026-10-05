package com.baeldung.rate.exception;

public class ProviderNotFoundException extends RuntimeException {

    public ProviderNotFoundException() {
    }

    public ProviderNotFoundException(String message) {
        super(message);
    }

}
