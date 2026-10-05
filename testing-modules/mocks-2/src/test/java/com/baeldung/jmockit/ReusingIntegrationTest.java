package com.baeldung.jmockit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import mockit.Expectations;
import mockit.Injectable;
import mockit.Mocked;
import mockit.Tested;
import mockit.Verifications;

public class ReusingIntegrationTest {

    @Injectable
    private Collaborator collaborator;
    
    @Mocked
    private Model model;

    @Tested
    private Performer performer;
    
    @BeforeEach
    public void setup(){
        new Expectations(){{
           model.getInfo(); result = "foo"; minTimes = 0;
           collaborator.collaborate("foo"); result = true; minTimes = 0; 
        }};
    }

    @Test
    public void testWithSetup() {
        performer.perform(model);
        verifyTrueCalls(1);
    }
    
    protected void verifyTrueCalls(int calls){
        new Verifications(){{
           collaborator.receive(true); times = calls; 
        }};
    }
    
    final class TrueCallsVerification extends Verifications{
        public TrueCallsVerification(int calls){
            collaborator.receive(true); times = calls; 
        }
    }
    
    @Test
    public void testWithFinalClass() {
        performer.perform(model);
        new TrueCallsVerification(1);
    }
}
