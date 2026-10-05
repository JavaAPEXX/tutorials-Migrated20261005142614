package com.baeldung.spring.cloud.archaius.jdbconfig.jdbc;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Properties {    

    @Id
    private String key;
    
    @SuppressWarnings("unused")
    private String value;
}
