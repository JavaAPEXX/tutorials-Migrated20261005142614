package com.baeldung.ibmmq;

import static java.rmi.server.LogStream.log;

import jakarta.jms.JMSException;
import jakarta.jms.Queue;
import jakarta.jms.QueueConnection;
import jakarta.jms.QueueConnectionFactory;
import jakarta.jms.QueueSender;
import jakarta.jms.QueueSession;
import jakarta.jms.Session;
import jakarta.jms.TextMessage;

public class MessageSender {

    private QueueConnectionFactory factory;
    private QueueConnection connection;
    private QueueSession session;
    private QueueSender sender;

    public MessageSender() {

    }

    public void initialize() throws JMSException {
        factory = new JMSSetup().createConnectionFactory();
        connection = factory.createQueueConnection();
        session = connection.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
        Queue queue = session.createQueue("QUEUE1");
        sender = session.createSender(queue);
        connection.start();
    }

    public void sendMessage(String messageText) {
        try {
            TextMessage message = session.createTextMessage();
            message.setText(messageText);
            sender.send(message);
            log("Message sent: " + messageText);
        } catch (JMSException e) {
            // handle exception
        } finally {
            try {
                if (sender != null) {
                    sender.close();
                }

                if (session != null) {
                    session.close();
                }

                if (connection != null) {
                    connection.close();
                }
            } catch (JMSException e) {
                // handle exception
            }
        }
    }
}
