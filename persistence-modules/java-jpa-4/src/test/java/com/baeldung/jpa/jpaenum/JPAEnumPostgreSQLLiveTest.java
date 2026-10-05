package com.baeldung.jpa.jpaenum;

import static org.junit.Assert.assertEquals;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.Query;

public class JPAEnumPostgreSQLLiveTest {

    private Session session;

    @BeforeEach
    public void setUp() {
        session = HibernateUtil.getSessionFactory().openSession();
    }

    @AfterEach
    public void tearDown() {
        if (session != null) {
            session.close();
        }
        HibernateUtil.shutdown();
    }

    @Test
    public void givenJavEnum_whenUsingPostgreSQLEnumJdbcType_thenInsertSuccessfully() {
        Transaction transaction = session.beginTransaction();

        CustomerOrder order = new CustomerOrder();
        order.setStatus(OrderStatus.COMPLETED);
        session.save(order);
        transaction.commit();

        // enforce JPA retrieve the data from db.
        session.clear();

        CustomerOrder retrievedOrder = session.get(CustomerOrder.class, order.getId());
        assertEquals(OrderStatus.COMPLETED, retrievedOrder.getStatus());
    }

    @Test
    public void givenNativeQuery_whenUsingCastingEnum_thenInsertSuccessfully() {
        Transaction transaction = session.beginTransaction();

        // Create a native query to insert a CustomerOrder
        String sql = "INSERT INTO customer_order (status) VALUES (cast(:status as order_status))";
        Query query = session.createNativeQuery(sql);
        query.setParameter("status", OrderStatus.COMPLETED.name()); // Use the string representation of the enum

        query.executeUpdate();
        transaction.commit();

        CustomerOrder retrievedOrder = session.get(CustomerOrder.class, 1L);
        assertEquals(OrderStatus.COMPLETED, retrievedOrder.getStatus());
    }
}
