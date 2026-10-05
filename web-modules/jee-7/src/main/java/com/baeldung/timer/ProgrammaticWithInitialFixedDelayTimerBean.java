package com.baeldung.timer;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import jakarta.ejb.*;
import javax.enterprise.event.Event;
import javax.inject.Inject;

/**
 * author: Cristian Chiovari
 */
@Startup
@Singleton
public class ProgrammaticWithInitialFixedDelayTimerBean {

    @Inject
    Event<TimerEvent> event;

    @Resource
    TimerService timerService;

    @PostConstruct
    public void initialize() {
        timerService.createTimer(10000l,5000l, "Delay 10 seconds then every 5 second timer");
    }

    @Timeout
    public void programmaticTimout(Timer timer) {
        event.fire(new TimerEvent(timer.getInfo().toString()));
    }
}
