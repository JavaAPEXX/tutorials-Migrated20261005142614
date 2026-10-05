package com.baeldung.distinct;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DistinctWithVavrUnitTest {
    List<Person> personList;

    @BeforeEach
    public void init() {
        personList = PersonDataGenerator.getPersonListWithFakeValues();
    }

    @Test
    public void whenFilterListByName_thenSizeShouldBe4() {
        List<Person> personListFiltered = io.vavr.collection.List.ofAll(personList).distinctBy(Person::getName).toJavaList();
        assertTrue(personListFiltered.size() == 4);
    }

    @Test
    public void whenFilterListByAge_thenSizeShouldBe2() {
        List<Person> personListFiltered = io.vavr.collection.List.ofAll(personList).distinctBy(Person::getAge).toJavaList();
        assertTrue(personListFiltered.size() == 2);
    }

}
