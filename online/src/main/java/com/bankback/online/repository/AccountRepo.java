package com.bankback.online.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bankback.online.entity.AccountData;

public interface AccountRepo extends JpaRepository<AccountData,Long> {

	//to get accdata by user id
	@Query(value = "select * from account_data where userid = :query ",nativeQuery = true)
	List<AccountData> getacclistbyuser(long query);
}
