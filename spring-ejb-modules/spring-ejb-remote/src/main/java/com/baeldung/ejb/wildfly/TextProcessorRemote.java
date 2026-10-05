package com.baeldung.ejb.wildfly;

import jakarta.ejb.Remote;

@Remote
public interface TextProcessorRemote {

    String processText(String text);
}