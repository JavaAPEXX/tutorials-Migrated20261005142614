package com.baeldung.loadtesting.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;

import java.util.Date;
import java.util.Calendar;

@Entity
@Table(indexes = {@Index(columnList="customerRewardsId")})
public class Transaction {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private Integer customerRewardsId;
    private Integer customerId;
    private Date transactionDate;

    public Transaction(){
        transactionDate = Calendar.getInstance().getTime();
    }

    public void setTransactionDate(Date transactionDate){
        this.transactionDate = transactionDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCustomerRewardsId() {
        return customerRewardsId;
    }

    public void setCustomerRewardsId(Integer customerRewardsId) {
        this.customerRewardsId = customerRewardsId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }
    
    
}
