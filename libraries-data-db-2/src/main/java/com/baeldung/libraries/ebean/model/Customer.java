package com.baeldung.libraries.ebean.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
public class Customer extends BaseModel {

    public Customer(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    Address address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Customer [id=" + id + ", name=" + name + ", address=" + address + "]";
    }

}
