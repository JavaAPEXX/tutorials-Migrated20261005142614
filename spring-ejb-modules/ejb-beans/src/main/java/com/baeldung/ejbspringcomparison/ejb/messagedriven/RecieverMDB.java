package com.baeldung.ejbspringcomparison.ejb.messagedriven;

import jakarta.annotation.Resource;
import jakarta.ejb.ActivationConfigProperty;
import jakarta.ejb.MessageDriven;
import jakarta.jms.Connection;
import jakarta.jms.ConnectionFactory;
import jakarta.jms.DeliveryMode;
import jakarta.jms.JMSException;
import jakarta.jms.Message;
import jakarta.jms.MessageListener;
import jakarta.jms.MessageProducer;
import jakarta.jms.Queue;
import jakarta.jms.Session;
import jakarta.jms.TextMessage;

@MessageDriven(activationConfig = { @ActivationConfigProperty(propertyName = "destination", propertyValue = "myQueue"), @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue") })
public class RecieverMDB implements MessageListener {

    @Resource
    private ConnectionFactory connectionFactory;

    @Resource(name = "ackQueue")
    private Queue ackQueue;

    public void onMessage(Message message) {
        try {

            TextMessage textMessage = (TextMessage) message;
            String producerPing = textMessage.getText();

            if ("marco".equals(producerPing)) {
                acknowledge("polo");
            }
        } catch (JMSException e) {
            throw new IllegalStateException(e);
        }
    }

    private void acknowledge(String text) throws JMSException {

        Connection connection = null;
        Session session = null;

        try {
            connection = connectionFactory.createConnection();
            connection.start();

            session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);

            MessageProducer ackSender = session.createProducer(ackQueue);
            ackSender.setDeliveryMode(DeliveryMode.NON_PERSISTENT);

            TextMessage message = session.createTextMessage(text);

            ackSender.send(message);
        } finally {
            session.close();
            connection.close();
        }
    }

}
