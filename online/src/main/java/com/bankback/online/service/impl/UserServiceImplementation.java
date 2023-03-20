package com.bankback.online.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bankback.online.entity.User;
import com.bankback.online.exception.ResourceNotFoundException;
import com.bankback.online.repository.UserRepository;
import com.bankback.online.service.UserService;

@Service
public class UserServiceImplementation implements UserService {
 
	public UserServiceImplementation(UserRepository userepo) {
		super();
		this.userepo = userepo;
	}

	private UserRepository userepo;
	@Override
	public User saveUser(User userdata) {
		// TODO Auto-generated method stub
		return userepo.save(userdata);
	}

	@Override
	public User getUserById(long id) {
		// TODO Auto-generated method stub
		return userepo.findById(id).orElseThrow(() -> 
        new ResourceNotFoundException("UserData","id",id));
	}

	@Override
	public User checkuser(String username, String pass) {
		// TODO Auto-generated method stub
		return userepo.logincheck(username, pass);
	}

	@Override
	public List<User> getalluser() {
		// TODO Auto-generated method stub
		return userepo.findAll();
	}

	@Override
	public User blockuser(long id, boolean data) {
		// TODO Auto-generated method stub
		userepo.findById(id).orElseThrow(() -> 
        new ResourceNotFoundException("UserData","id",id));
		User existingdata = userepo.findById(id).orElseThrow();
		existingdata.setBlock(data);
		userepo.save(existingdata);
		return existingdata;
	}


}
