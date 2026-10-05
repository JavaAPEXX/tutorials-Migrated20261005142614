package com.baeldung.lombok.standardexception;

public class CustomNumberFormatException extends NumberFormatException {
    public CustomNumberFormatException() {
    }

    public CustomNumberFormatException(String s) {
        super(s);
    }
}