package com.example.demo.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import reactor.core.publisher.Flux;

@BrowserCallable
@AnonymousAllowed
public class AiService {
    private final ChatClient chatClient;

    public AiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }
    public Flux<String> getCompletion(String prompt){
        return chatClient.prompt()
                .user(prompt)
                .stream()
                .content();
    }
}
