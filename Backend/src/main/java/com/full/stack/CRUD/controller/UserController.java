package com.full.stack.CRUD.controller;

import com.full.stack.CRUD.exception.UserNotFoundException;
import com.full.stack.CRUD.model.User;
import com.full.stack.CRUD.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
   @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    @ResponseBody
    User newUser(@RequestBody User newUser ){
//        System.out.println("rtwvgvy");

        return userRepository.save(newUser);
    }
    @GetMapping("users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/user/{id}")
    String deletedUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " +id + " has been deleted success. ";
    }


}
