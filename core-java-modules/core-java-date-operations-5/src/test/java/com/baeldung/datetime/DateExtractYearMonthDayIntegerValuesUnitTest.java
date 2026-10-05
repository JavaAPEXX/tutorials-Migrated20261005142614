package com.baeldung.datetime;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DateExtractYearMonthDayIntegerValuesUnitTest {

    DateExtractYearMonthDayIntegerValues extractYearMonthDateIntegerValues = new DateExtractYearMonthDayIntegerValues();
    
    Date date;
    
    @BeforeEach
    public void setup() throws ParseException
    {
        date=new SimpleDateFormat("dd-MM-yyyy").parse("01-03-2018");
    }
    
    @Test
    public void whenGetYear_thenCorrectYear()
    {
       int actualYear=extractYearMonthDateIntegerValues.getYear(date);
       assertThat(actualYear,is(2018));
    }
    
    @Test
    public void whenGetMonth_thenCorrectMonth()
    {
       int actualMonth=extractYearMonthDateIntegerValues.getMonth(date);
       assertThat(actualMonth,is(02));
    }
    
    @Test
    public void whenGetDay_thenCorrectDay()
    {
       int actualDayOfMonth=extractYearMonthDateIntegerValues.getDay(date);
       assertThat(actualDayOfMonth,is(01));
    }
}
