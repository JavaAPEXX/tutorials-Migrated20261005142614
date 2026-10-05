package com.baeldung.spring.jms;

import org.springframework.jms.support.converter.MessageConversionException;
import org.springframework.jms.support.converter.MessageConverter;

import jakarta.jms.JMSException;
import jakarta.jms.MapMessage;
import jakarta.jms.Message;
import jakarta.jms.Session;

public class SampleMessageConverter implements MessageConverter {

    public Message toMessage(Object object, Session session) throws JMSException, MessageConversionException {
        Employee employee = (Employee) object;
        MapMessage message = session.createMapMessage();
        message.setString("name", employee.getName());
        message.setInt("age", employee.getAge());
        return message;
    }

    public Object fromMessage(Message message) throws JMSException, MessageConversionException {
        MapMessage mapMessage = (MapMessage) message;
        return new Employee(mapMessage.getString("name"), mapMessage.getInt("age"));
    }

}
