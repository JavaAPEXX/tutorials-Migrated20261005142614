package com.baeldung.arquillian;

import jakarta.ejb.Stateless;

@Stateless
public class CapsConvertor {
    public ConvertToLowerCase getLowerCase(){
        return new ConvertToLowerCase();
    }
}