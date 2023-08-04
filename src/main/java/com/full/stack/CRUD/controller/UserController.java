package com.full.stack.CRUD.controller;
import com.full.stack.CRUD.model.User;
import com.full.stack.CRUD.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
   @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser ){

        return userRepository.save(newUser);
    }

}
