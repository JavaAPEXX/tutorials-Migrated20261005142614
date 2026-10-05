package com.baeldung.jackson.field;

public class MyDtoWithGetter {

    private String stringValue;
    private int intValue;

    public MyDtoWithGetter() {
    }

    public MyDtoWithGetter(final String stringValue, final int intValue) {
        this.stringValue = stringValue;
        this.intValue = intValue;
    }

    // API

    public String getStringValue() {
        return stringValue;
    }

}
