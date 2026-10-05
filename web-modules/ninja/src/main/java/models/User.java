package models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id;
    
    @NotNull
    public String firstName;

    public String email;
    
    public String toString() {
        return firstName + " : " + email;
    }
    
}
