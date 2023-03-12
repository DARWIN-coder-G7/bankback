package com.bankback.online.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bankback.online.entity.AccountData;
import com.bankback.online.repository.AccountRepo;
import com.bankback.online.service.AccountService;
import com.bankback.online.exception.ResourceNotFoundException;

@Service
public class Accserviceimpl implements AccountService {
  
	public Accserviceimpl(AccountRepo accrepo) {
		super();
		this.accrepo = accrepo;
	}

	private AccountRepo accrepo;
	@Override
	public AccountData saveaccount(AccountData accdata,long id) {
		// TODO Auto-generated method stub
		AccountData existingdata = accrepo.findById(id).orElseThrow();
		existingdata.setWithdrawal(accdata.isWithdrawal());
		existingdata.setChequebook(accdata.isChequebook());
		existingdata.setDeposit(accdata.isDeposit());
		existingdata.setMoneytransfer(accdata.isMoneytransfer());
		accrepo.save(existingdata);
		return existingdata;
	}

	@Override
	public AccountData newacc(AccountData accdata) {
		// TODO Auto-generated method stub
		accrepo.save(accdata);
		return accdata;
		
	}

	@Override
	public double depositCash(double amount, long accno) {
		AccountData existingdata = accrepo.findById(accno).orElseThrow();
		double bal = existingdata.getBalance();
		double total = bal+amount;
		existingdata.setBalance(total);
		accrepo.save(existingdata);
		return 0;
	}

	@Override
	public double debitCash(double amount, long accno) {
		AccountData existingdata = accrepo.findById(accno).orElseThrow();
		double bal = existingdata.getBalance();
		double total = bal-amount;
		existingdata.setBalance(total);
		accrepo.save(existingdata);
		return 0;
	}

	@Override
	public List<AccountData> getall() {
		// TODO Auto-generated method stub
		
		return accrepo.findAll();
	}

	@Override
	public List<AccountData> getallbyuserid(long id) {
		// TODO Auto-generated method stub
		return accrepo.getacclistbyuser(id);
	}

	@Override
	public AccountData getbyid(long id) {
		// TODO Auto-generated method stub
		return accrepo.findById(id).orElseThrow(() -> 
        new ResourceNotFoundException("AccountData","id",id));
	}

}
