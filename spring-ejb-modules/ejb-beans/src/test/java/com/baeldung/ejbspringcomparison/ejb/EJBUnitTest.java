package com.baeldung.ejbspringcomparison.ejb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import jakarta.annotation.Resource;
import jakarta.ejb.EJB;
import jakarta.ejb.embeddable.EJBContainer;
import jakarta.jms.Connection;
import jakarta.jms.ConnectionFactory;
import jakarta.jms.JMSException;
import jakarta.jms.MessageConsumer;
import jakarta.jms.MessageProducer;
import jakarta.jms.Queue;
import jakarta.jms.Session;
import jakarta.jms.TextMessage;
import javax.naming.Context;
import javax.naming.NamingException;

import org.junit.jupiter.api.AfterEach;
import org.junit.AfterClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;

import com.baeldung.ejbspringcomparison.ejb.singleton.CounterEJBRemote;
import com.baeldung.ejbspringcomparison.ejb.stateful.ShoppingCartEJBRemote;
import com.baeldung.ejbspringcomparison.ejb.stateless.FinderEJBRemote;

public class EJBUnitTest {

    private static EJBContainer ejbContainer = null;

    private static Context context = null;

    @Resource
    private ConnectionFactory connectionFactory;

    @EJB
    private FinderEJBRemote alphabetFinder;

    @Resource(name = "myQueue")
    private Queue myQueue;

    @Resource(name = "ackQueue")
    private Queue ackQueue;

    @BeforeClass
    public static void start() throws NamingException {
        ejbContainer = EJBContainer.createEJBContainer();
    }

    @BeforeEach
    public void initializeContext() throws NamingException {
        context = ejbContainer.getContext();
        context.bind("inject", this);
    }

    @Test
    public void givenSingletonBean_whenCounterInvoked_thenCountIsIncremented() throws NamingException {

        int count = 0;
        CounterEJBRemote firstCounter = (CounterEJBRemote) context.lookup("java:global/ejb-beans/CounterEJB");
        firstCounter.setName("first");
        
        for (int i = 0; i < 10; i++) {
            count = firstCounter.count();
        }
        
        assertEquals(10, count);
        assertEquals("first", firstCounter.getName());

        CounterEJBRemote secondCounter = (CounterEJBRemote) context.lookup("java:global/ejb-beans/CounterEJB");

        int count2 = 0;
        for (int i = 0; i < 10; i++) {
            count2 = secondCounter.count();
        }

        assertEquals(20, count2);
        assertEquals("first", secondCounter.getName());

    }

    @Test
    public void givenStatefulBean_whenBathingCartWithThreeItemsAdded_thenItemsSizeIsThree() throws NamingException {
        ShoppingCartEJBRemote bathingCart = (ShoppingCartEJBRemote) context.lookup("java:global/ejb-beans/ShoppingCartEJB");

        bathingCart.setName("bathingCart");

        bathingCart.addItem("soap");
        bathingCart.addItem("shampoo");
        bathingCart.addItem("oil");

        assertEquals(3, bathingCart.getItems()
            .size());
        assertEquals("bathingCart", bathingCart.getName());

        ShoppingCartEJBRemote fruitCart = (ShoppingCartEJBRemote) context.lookup("java:global/ejb-beans/ShoppingCartEJB");

        fruitCart.addItem("apples");
        fruitCart.addItem("oranges");

        assertEquals(2, fruitCart.getItems()
            .size());
        assertNull(fruitCart.getName());
    }

    @Test
    public void givenStatelessBean_whenSearchForA_thenApple() throws NamingException {

        assertEquals("Apple", alphabetFinder.search("A"));
    }

    @Test
    public void givenMDB_whenMessageSent_thenAcknowledgementReceived() throws InterruptedException, JMSException, NamingException {

        Connection connection = connectionFactory.createConnection();
        connection.start();
        Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        MessageProducer producer = session.createProducer(myQueue);
        producer.send(session.createTextMessage("marco"));
        MessageConsumer response = session.createConsumer(ackQueue);

        assertEquals("polo", ((TextMessage) response.receive(1000)).getText());

    }

    @AfterEach
    public void reset() throws NamingException {
        context.unbind("inject");
    }

    @AfterClass
    public static void closeContext() throws NamingException {
        context.close();
        ejbContainer.close();
    }

}
