package com.baeldung.hibernate.pojo;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import org.locationtech.jts.geom.Point;

@Entity
public class PointEntity {

    @Id
    @GeneratedValue
    private Long id;

    @Column(columnDefinition="BINARY(2048)")
    private Point point;

    public PointEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    @Override
    public String toString() {
        return "PointEntity{" + "id=" + id + ", point=" + point + '}';
    }
}
