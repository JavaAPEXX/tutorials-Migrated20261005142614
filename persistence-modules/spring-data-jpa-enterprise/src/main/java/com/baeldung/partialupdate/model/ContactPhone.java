package com.baeldung.partialupdate.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ContactPhone {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    @Column(nullable=false)
    public long customerId;
    public String phone;

    @Override
    public String toString() {
       return phone;
    }
}
