package com.baeldung.ibmmq;

import static java.rmi.server.LogStream.log;

import jakarta.jms.JMSException;
import jakarta.jms.Message;
import jakarta.jms.QueueConnection;
import jakarta.jms.QueueConnectionFactory;
import jakarta.jms.QueueReceiver;
import jakarta.jms.QueueSender;
import jakarta.jms.QueueSession;
import jakarta.jms.Session;
import jakarta.jms.Queue;
import jakarta.jms.TextMessage;

public class MessageReceiver {

    private QueueConnectionFactory factory;
    private QueueConnection connection;
    private QueueSession session;
    private QueueReceiver receiver;

    public MessageReceiver() {

    }

    public void initialize() throws JMSException {
        factory = new JMSSetup().createConnectionFactory();
        connection = factory.createQueueConnection();
        session = connection.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
        Queue queue = session.createQueue("QUEUE1");
        receiver = session.createReceiver(queue);
        connection.start();
    }

    public void receiveMessage() {
        try {
            Message message = receiver.receive(1000);
            if (message instanceof TextMessage) {
                TextMessage textMessage = (TextMessage) message;
                long timestamp = message.getJMSTimestamp();
                String messageId = message.getJMSMessageID();
                int priority = message.getJMSPriority();
                long expiration = message.getJMSExpiration();
                log("Message received: " + textMessage.getText());
                log("Message ID: " + messageId);
                log("Message timestamp: " + timestamp);
                log("Message Priority: " + priority);
                log("Expiration Time: " + expiration);
            } else {
                log("No text message received.");
            }
        } catch (JMSException e) {
            // handle exception
        } finally {
            try {
                if (receiver != null) {
                    receiver.close();
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