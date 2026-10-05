package com.baeldung.rxjava.jdbc;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.github.davidmoten.rx.jdbc.ConnectionProvider;
import com.github.davidmoten.rx.jdbc.Database;

import rx.Observable;

public class ReturnKeysIntegrationTest {

    private Observable<Boolean> begin = null;
    private Observable<Integer> createStatement = null;

    private ConnectionProvider connectionProvider = Connector.connectionProvider;
    private Database db = Database.from(connectionProvider);

    @BeforeEach
    public void setup() {
        begin = db.beginTransaction();
        createStatement = db.update("CREATE TABLE IF NOT EXISTS EMPLOYEE_SAMPLE(id int auto_increment primary key, name varchar(255))")
          .dependsOn(begin)
          .count();
    }

    @Test
    public void whenInsertAndReturnGeneratedKey_thenCorrect() {
        Integer key = db.update("INSERT INTO EMPLOYEE_SAMPLE(name) VALUES('John')")
          .dependsOn(createStatement)
          .returnGeneratedKeys()
          .getAs(Integer.class)
          .count()
          .toBlocking()
          .single();
        assertThat(key).isEqualTo(1);
    }

    @AfterEach
    public void close() {
        db.update("DROP TABLE EMPLOYEE_SAMPLE")
          .dependsOn(createStatement);
        connectionProvider.close();
    }
}
