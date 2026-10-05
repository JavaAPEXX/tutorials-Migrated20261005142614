package com.baeldung.jackson.date;

import java.util.Date;

public class Event {
    public String name;
    public Date eventDate;

    public Event() {
    }

    public Event(final String name, final Date eventDate) {
        this.name = name;
        this.eventDate = eventDate;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public String getName() {
        return name;
    }
}
