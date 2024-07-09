package com.example.demo.service;

import com.example.demo.data.Contact;
import com.example.demo.data.ContactRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;


@BrowserCallable
@AnonymousAllowed
public class ContactService extends CrudRepositoryService<Contact,Long,ContactRepository> {


}
