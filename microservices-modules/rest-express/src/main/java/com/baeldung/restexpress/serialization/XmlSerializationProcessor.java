package com.baeldung.restexpress.serialization;

import com.baeldung.restexpress.uuid.SampleUuidEntity;
import org.restexpress.serialization.xml.XstreamXmlProcessor;

public class XmlSerializationProcessor
        extends XstreamXmlProcessor {
    public XmlSerializationProcessor() {
        alias("sample", SampleUuidEntity.class);
//		alias("element_name", Element.class);
//		alias("element_name", Element.class);
//		alias("element_name", Element.class);
//		alias("element_name", Element.class);
        registerConverter(new XstreamUuidConverter());
        registerConverter(new XstreamOidConverter());
    }
}
