package com.baeldung.singletonbean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.PostConstruct;
import jakarta.ejb.ConcurrencyManagement;
import jakarta.ejb.ConcurrencyManagementType;
import jakarta.ejb.Lock;
import jakarta.ejb.LockType;
import jakarta.ejb.Singleton;
import jakarta.ejb.Startup;

@Singleton
@Startup
@ConcurrencyManagement(ConcurrencyManagementType.CONTAINER)
public class CountryStateContainerManagedBean implements CountryState {

    private Map<String, List<String>> countryStatesMap = new HashMap<String, List<String>>();

    @Lock(LockType.WRITE)
    @PostConstruct
    public void initialize() {

        List<String> states = new ArrayList<>();
        states.add("Texas");
        states.add("Alabama");
        states.add("Alaska");
        states.add("Arizona");
        states.add("Arkansas");

        countryStatesMap.put("UnitedStates", states);
    }

    @Lock(LockType.READ)
    public List<String> getStates(String country) {
        return countryStatesMap.get(country);
    }

    @Lock(LockType.WRITE)
    public void setStates(String country, List<String> states) {
        countryStatesMap.put(country, states);
    }
}
