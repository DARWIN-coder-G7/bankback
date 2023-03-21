package com.bankback.online.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bankback.online.entity.TransactionData;
import com.bankback.online.repository.Transacdata;
import com.bankback.online.service.TransacService;

@Service
public class Transacimpl implements TransacService{
   public Transacimpl(Transacdata transacrepo) {
		super();
		this.transacrepo = transacrepo;
	}

private Transacdata transacrepo;
	@Override
	public List<TransactionData> getall() {
		// TODO Auto-generated method stub
		return transacrepo.findAll();
	}

	@Override
	public List<TransactionData> getbystatus(String query) {
		// TODO Auto-generated method stub
		return transacrepo.bystatus(query);
	}

	@Override
	public List<TransactionData> getByaccno(long accno) {
		// TODO Auto-generated method stub
		return transacrepo.byaccno(accno);
	}

	@Override
	public TransactionData savedata(TransactionData transactiondata) {
		// TODO Auto-generated method stub
		transacrepo.save(transactiondata);
		return transactiondata;
	}

}
