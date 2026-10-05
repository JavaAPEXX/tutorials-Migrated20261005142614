package com.baeldung.jpaenum;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import io.hypersistence.utils.hibernate.type.basic.PostgreSQLEnumType;

@Entity
@Table(name = "customer_order")
@TypeDef( name = "pgsql_enum", typeClass = PostgreSQLEnumType.class )
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "order_status")
    @Type(type = "pgsql_enum")
    private OrderStatus status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
