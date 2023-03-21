package com.bankback.online.service;

import java.util.List;

import com.bankback.online.entity.User;


public interface UserService {
User saveUser(User userdata);
User getUserById(long id);
List<User> getalluser();
User checkuser(String username,String pass);
User blockuser(long id , boolean data);
}

