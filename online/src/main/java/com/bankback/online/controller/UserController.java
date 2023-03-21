package com.bankback.online.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bankback.online.entity.User;
import com.bankback.online.service.UserService;



@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/user")
public class UserController {

	public UserController(UserService userservice) {
		super();
		this.userservice = userservice;
	}

	private UserService userservice;
	
	// To create a new user
	@PostMapping()
	public ResponseEntity<User> saveUser(@RequestBody User userdata){
		return new ResponseEntity<User>(userservice.saveUser(userdata),HttpStatus.CREATED);
	}
	//To get userDetails by id
	@GetMapping("{id}")
	public ResponseEntity<User> getUser(@PathVariable long id){
		return new ResponseEntity<User>(userservice.getUserById(id),HttpStatus.OK);
		
	}
	@PostMapping("/log")
	public ResponseEntity<?> loginuser(@RequestBody User userdata){
		User user =  userservice.getUserById(userdata.getUserid());
		if(user.getUserpass().equals(userdata.getUserpass()))
			return ResponseEntity.ok(user);
		
		return (ResponseEntity<?>)ResponseEntity.internalServerError();
	}
	//http://localhost:8080/api/user/seeman/Seem@n
	@GetMapping("/{username}/{pass}")
	public ResponseEntity<User> validatelogin(@PathVariable("username") String username,
			@PathVariable("pass") String pass){
	return new ResponseEntity<User>(userservice.checkuser(username, pass),HttpStatus.OK);
		
	}
	//to get all usewr acc holder
	@GetMapping()
	public ResponseEntity<List<User>> togetalluser(){
		return new ResponseEntity<List<User>>(userservice.getalluser(),HttpStatus.OK);
	}
	/*@GetMapping("/checker")
	public ResponseEntity<UserData> validateclogin(){
		String username = "sarathi";
		String pass = "S@rathi";
	return new ResponseEntity<UserData>(userservice.checkuser(username, pass),HttpStatus.OK);
		
	}*/
	@PutMapping()
	public ResponseEntity<User> blockuser(@RequestParam("status") Boolean Status, 
			@RequestParam("accno") String accno){
		long id = Long.parseLong(accno);
		return new ResponseEntity<User>(userservice.blockuser(id, Status),HttpStatus.OK);
	}
}
