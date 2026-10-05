package com.baeldung.wildfly.mdb;

import jakarta.ejb.ActivationConfigProperty;
import jakarta.ejb.MessageDriven;
import jakarta.jms.JMSException;
import jakarta.jms.Message;
import jakarta.jms.MessageListener;
import jakarta.jms.TextMessage;

/**
 * Message-Driven Bean implementation class for: ReadMessageMDB
 */
@MessageDriven(
        activationConfig = { 
            @ActivationConfigProperty(propertyName = "destination", propertyValue = "tutorialQueue"), 
            @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue")
})
public class ReadMessageMDB implements MessageListener {

    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage) message;
        try {
            System.out.println("Message received: " + textMessage.getText());
        } catch (JMSException e) {
            System.out.println("Error while trying to consume messages: " + e.getMessage());
        }
    }
}