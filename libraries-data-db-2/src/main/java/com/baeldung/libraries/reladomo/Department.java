package com.baeldung.libraries.reladomo;

public class Department extends DepartmentAbstract {
    public Department() {
        // You must not modify this constructor. Mithra calls this internally.
        // You can call this constructor. You can also add new constructors.
    }

    public Department(long id, String name) {
        this.setId(id);
        this.setName(name);
    }
}
