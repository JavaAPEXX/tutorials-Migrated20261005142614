package com.baeldung.hibernate.cache.dao;

import com.baeldung.hibernate.cache.model.Foo;
import org.springframework.stereotype.Repository;

@Repository
public class FooDao extends AbstractJpaDAO<Foo> implements IFooDao {

    public FooDao() {
        setClazz(Foo.class);
    }

    // API

}
