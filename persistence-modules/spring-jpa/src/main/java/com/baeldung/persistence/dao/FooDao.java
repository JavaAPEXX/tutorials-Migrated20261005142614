package com.baeldung.persistence.dao;

import com.baeldung.persistence.model.Foo;
import org.springframework.stereotype.Repository;

@Repository
public class FooDao extends AbstractJpaDAO<Foo> implements IFooDao {

    public FooDao() {
        setClazz(Foo.class);
    }

    // API

}
