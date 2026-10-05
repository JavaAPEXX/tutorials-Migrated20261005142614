package com.baeldung.libraries.jdo.xml;

import jakarta.jdo.annotations.Element;
import jakarta.jdo.annotations.PersistenceCapable;
import jakarta.jdo.annotations.PrimaryKey;
import java.util.ArrayList;
import java.util.List;

import jakarta.xml.bind.annotation.XmlAttribute;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlElementWrapper;

@PersistenceCapable(schema = "/myproduct/people", table = "person")
public class AnnotadedPerson {
    @XmlAttribute
    private long personNum;

    @PrimaryKey
    private String firstName;
    private String lastName;

    @XmlElementWrapper(name = "phone-numbers")
    @XmlElement(name = "phone-number")
    @Element(types = String.class)
    private List phoneNumbers = new ArrayList();

    public AnnotadedPerson(long personNum, String firstName, String lastName) {
        this.personNum = personNum;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public long getPersonNum() {
        return personNum;
    }

    public void setPersonNum(long personNum) {
        this.personNum = personNum;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(List phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

}
