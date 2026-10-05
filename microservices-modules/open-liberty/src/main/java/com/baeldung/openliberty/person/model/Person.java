package com.baeldung.openliberty.person.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Person {
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int id;
    
    private String username;
    private String email;
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public Person(int id, @NotBlank String username, @Email String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
    
    public Person() {
    }

    public String toString() {
        return this.id + ":" +this.username;
    }
}
