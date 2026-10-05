package com.baeldung.jackson.annotation.exception;

import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName(value = "user", namespace="users")
public class UserWithRootNamespace {
    public int id;
    public String name;

    public UserWithRootNamespace() {
    }

    public UserWithRootNamespace(final int id, final String name) {
        this.id = id;
        this.name = name;
    }
}
