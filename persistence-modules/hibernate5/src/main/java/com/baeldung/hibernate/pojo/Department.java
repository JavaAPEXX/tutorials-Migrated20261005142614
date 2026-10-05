package com.baeldung.hibernate.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.TableGenerator;

@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator="table-generator")
    @TableGenerator (name="table-generator", table="dep_ids", pkColumnName="seq_id", valueColumnName="seq_value")
    private long depId;

    public long getDepId() {
        return depId;
    }

    public void setDepId(long depId) {
        this.depId = depId;
    }
    
    
}
