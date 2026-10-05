package com.baeldung.ibmmq;

import jakarta.jms.JMSException;
import jakarta.jms.QueueConnectionFactory;

import com.ibm.mq.jms.MQQueueConnectionFactory;

public class JMSSetup {

    public QueueConnectionFactory createConnectionFactory() throws JMSException {
        // Create an instance of MQQueueConnectionFactory
        MQQueueConnectionFactory factory = new MQQueueConnectionFactory();
        factory.setHostName("localhost");
        factory.setPort(1414);
        factory.setQueueManager("QM1");
        factory.setChannel("SYSTEM.DEF.SVRCONN");
        return factory;
    }
}