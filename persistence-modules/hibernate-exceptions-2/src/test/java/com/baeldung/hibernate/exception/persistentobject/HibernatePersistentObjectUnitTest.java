package com.baeldung.hibernate.exception.persistentobject;

import com.baeldung.hibernate.exception.persistentobject.entity.Article;
import com.baeldung.hibernate.exception.persistentobject.entity.Author;
import com.baeldung.hibernate.exception.persistentobject.entity.Book;
import org.hibernate.PropertyValueException;
import org.hibernate.Session;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class HibernatePersistentObjectUnitTest {

    private static Session session;

    @BeforeEach
    public void beforeAll() {
        session = HibernateUtil.getSessionFactory()
            .openSession();
        session.beginTransaction();
    }

    @AfterEach
    public void afterAll() {
        session.close();
    }

    @Test
    public void whenSavingEntityWithNullMandatoryField_thenThrowPropertyValueException() {
        Book book = new Book();

        assertThatThrownBy(() -> session.save(book)).isInstanceOf(PropertyValueException.class)
            .hasMessageContaining("not-null property references a null or transient value");
    }

    @Test
    public void whenSavingEntityWithAllMandatoryField_thenDoNotThrowException() {
        Book book = new Book();
        book.setTitle("Clean Code");

        session.save(book);
    }

    @Test
    public void whenSavingBidirectionalEntitiesWithoutSettingParent_thenThrowPropertyValueException() {
        Author author = new Author("John Doe");
        author.setArticles(asList(new Article("Java Tutorial"), new Article("What's New in JUnit5")));

        assertThatThrownBy(() -> session.save(author)).isInstanceOf(PropertyValueException.class)
            .hasMessageContaining("not-null property references a null or transient value");
    }

    @Test
    public void whenSavingBidirectionalEntitiesWithCorrectParent_thenDoNotThrowException() {
        Author author = new Author("John Doe");
        author.addArticles(asList(new Article("Java tutorial"), new Article("What's new in JUnit5")));

        session.save(author);
    }

}