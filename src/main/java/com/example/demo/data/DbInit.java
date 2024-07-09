package com.example.demo.data;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements ApplicationRunner {
    private final ContactRepository contactRepository;
    public DbInit(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }
    @Override
    public void run(ApplicationArguments args) throws Exception {
        String[] firstName = {
                "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
                "Sai", "Ayaan", "Krishna", "Ishaan", "Rohan",
                "Aryan", "Rahul", "Karthik", "Anirudh", "Vikram",
                "Siddharth", "Nikhil", "Manisha", "Rakesh", "Amit"
        };

        String[] lastName = {
                "Sharma", "Verma", "Gupta", "Jain", "Patel",
                "Reddy", "Nair", "Singh", "Yadav", "Pandey",
                "Chopra", "Mishra", "Joshi", "Kapoor", "Mehta",
                "Agarwal", "Malhotra", "Bose", "Nambiar", "Kulkarni"
        };
        for (int i = 0; i < 100; i++) {
            String name = firstName[(int)(Math.random()* firstName.length)] + " " + lastName[(int)(Math.random()* firstName.length)];
            String email=name.replaceAll(" ","").toLowerCase()+"@gmail.com";
            String phone="+1"+(int)(Math.random()*1000000000);
            contactRepository.save(new Contact(name, email, phone));
        }

    }

}
