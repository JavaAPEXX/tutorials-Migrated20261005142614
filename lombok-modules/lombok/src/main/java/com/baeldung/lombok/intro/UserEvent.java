package com.baeldung.lombok.intro;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor @Getter @Setter
public class UserEvent implements Serializable {

    // This class is just for sample purposes.

    private @Id @Setter(AccessLevel.PROTECTED) Long id;

    @ManyToOne
    private User user;

    public UserEvent(User user) {
        this.user = user;
    }

}
