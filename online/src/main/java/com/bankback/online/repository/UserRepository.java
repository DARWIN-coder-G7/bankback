package com.bankback.online.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bankback.online.entity.User;


public interface UserRepository extends JpaRepository<User,Long> {
	@Query(value = "select * from user where user_name = :name and user_pass = :pass" , nativeQuery = true)
	User logincheck(String name,String pass);
}
