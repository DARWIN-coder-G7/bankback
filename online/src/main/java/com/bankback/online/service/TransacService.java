package com.bankback.online.service;

import java.util.List;

import com.bankback.online.entity.TransactionData;

public interface TransacService {
	TransactionData savedata(TransactionData tdata);
List<TransactionData> getall();
List<TransactionData> getbystatus(String query);
List<TransactionData> getByaccno(long accno);
}
