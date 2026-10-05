package com.baeldung.jackson.field;

public class MyDtoAccessLevel {

    private String stringValue;
    int intValue;
    protected float floatValue;
    public boolean booleanValue;

    public MyDtoAccessLevel() {
    }

    public MyDtoAccessLevel(final String stringValue, final int intValue, final float floatValue, final boolean booleanValue) {
        this.stringValue = stringValue;
        this.intValue = intValue;
        this.floatValue = floatValue;
        this.booleanValue = booleanValue;
    }

}
