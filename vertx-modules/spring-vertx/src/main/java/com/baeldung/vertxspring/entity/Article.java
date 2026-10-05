package com.baeldung.vertxspring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import org.springframework.data.annotation.PersistenceConstructor;

@Entity
public class Article {

    @Id
    private Long id;
    private String article;

    private Article() {
    }

    @PersistenceConstructor
    public Article(Long id, String article) {
        this.id = id;
        this.article = article;
    }

    @Override
    public String toString() {
        return "Article [id=" + id + ", article=" + article + "]";
    }

    public Long getArticleId() {
        return id;
    }

    public void setArticleId(Long id) {
        this.id = id;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

}
