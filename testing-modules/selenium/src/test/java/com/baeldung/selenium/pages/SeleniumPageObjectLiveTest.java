package com.baeldung.selenium.pages;

import com.baeldung.selenium.config.SeleniumConfig;
import com.baeldung.selenium.models.BaeldungAbout;
import com.baeldung.selenium.pages.BaeldungHomePage;
import com.baeldung.selenium.pages.StartHerePage;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class SeleniumPageObjectLiveTest {

    private SeleniumConfig config;
    private BaeldungHomePage homePage;
    private BaeldungAbout about;

    @BeforeEach
    public void setUp() {
        config = new SeleniumConfig();
        homePage = new BaeldungHomePage(config);
        about = new BaeldungAbout(config);
    }

    @AfterEach
    public void teardown() {
        config.close();
    }

    @Test
    public void givenHomePage_whenNavigate_thenTitleMatch() {
        homePage.navigate();
        assertThat(homePage.getPageTitle(), is("Baeldung"));
    }

    @Test
    public void givenHomePage_whenNavigate_thenShouldBeInStartHere() {
        homePage.navigate();
        StartHerePage startHerePage = homePage.clickOnStartHere();
        assertThat(startHerePage.getPageTitle(), is("Start Here"));
    }

    @Test
    public void givenAboutPage_whenNavigate_thenTitleMatch() {
        about.navigateTo();
        assertThat(about.getPageTitle(), is("About Baeldung"));
    }
}
