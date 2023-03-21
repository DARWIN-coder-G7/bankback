package com.bankback.online.service;

import java.util.List;

import com.bankback.online.entity.AccountData;

public interface AccountService {

	//to update account
	AccountData saveaccount(AccountData accdata,long id);
	//to create account
	AccountData newacc(AccountData accdata);
	//to deposit amount
     double depositCash(double amount,long accno);
     //to withdraw amount
     double debitCash(double amount,long accno);
     //to get all acc
     List<AccountData> getall();
     //to get all by buserid
     List<AccountData> getallbyuserid(long id);
     //to get by id
     AccountData getbyid(long id);
}
