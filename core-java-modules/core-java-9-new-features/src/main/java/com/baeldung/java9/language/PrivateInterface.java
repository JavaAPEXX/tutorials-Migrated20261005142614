package com.baeldung.java9.language;

public interface PrivateInterface {

    private static String staticPrivate() {
        return "static private";
    }

    private String instancePrivate() {
        return "instance private";
    }

    public default void check() {
        String result = staticPrivate();
        if (!"static private".equals(result))
            throw new AssertionError("Incorrect result for static private interface method");
        PrivateInterface pvt = new PrivateInterface() {
        };
        result = pvt.instancePrivate();
        if (!"instance private".equals(result))
            throw new AssertionError("Incorrect result for instance private interface method");
    }
}
