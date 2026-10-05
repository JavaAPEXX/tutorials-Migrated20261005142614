package com.baeldung.partialupdate.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String name;
    public String phone;
    //...
    public String phone99;
    
    @Override public String toString() {
        return String.format("Customer %s, Phone: %s", 
                this.name, this.phone);
    }
}
