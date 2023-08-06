package com.full.stack.CRUD.controller;
import com.full.stack.CRUD.model.User;
import com.full.stack.CRUD.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
   @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    @ResponseBody
    User newUser(@RequestBody User newUser ){

        return userRepository.save(newUser);
    }
    @GetMapping("users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
