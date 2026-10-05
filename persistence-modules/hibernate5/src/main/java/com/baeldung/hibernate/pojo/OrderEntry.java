package com.baeldung.hibernate.pojo;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

@Entity
public class OrderEntry {

    @EmbeddedId
    private OrderEntryPK entryId;

    public OrderEntryPK getEntryId() {
        return entryId;
    }

    public void setEntryId(OrderEntryPK entryId) {
        this.entryId = entryId;
    }

}
