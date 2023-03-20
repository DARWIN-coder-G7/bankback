package com.bankback.online.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class AccountData {
public AccountData(String accholder, long mobilenum, String password, long userid) {
		super();
		this.accholder = accholder;
		this.mobilenum = mobilenum;
		this.password = password;
		this.userid = userid;
	}

public AccountData(Long accid, boolean moneytransfer, boolean deposit, boolean withdrawal, boolean chequebook) {
		super();
		this.accid = accid;
		this.moneytransfer = moneytransfer;
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		this.chequebook = chequebook;
	}

public AccountData(Long accid, long accno, String accholder, boolean moneytransfer, boolean deposit,
			boolean withdrawal, boolean chequebook, double balance, long userid) {
		super();
		this.accid = accid;
		this.accno = accno;
		this.accholder = accholder;
		this.moneytransfer = moneytransfer;
		this.deposit = deposit;
		this.withdrawal = withdrawal;
		this.chequebook = chequebook;
		this.balance = balance;
		this.userid = userid;
	}
public AccountData() {
		super();
	}

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long accid;
@GeneratedValue(strategy = GenerationType.AUTO)
private long accno ;
private String accholder;
private long mobilenum;
private String password;
private boolean moneytransfer;
private boolean deposit;
private boolean withdrawal;
private boolean chequebook;
private double balance;
private long userid;
public Long getAccid() {
	return accid;
}
public void setAccid(Long accid) {
	this.accid = accid;
}
public long getAccno() {
	return accno;
}
public void setAccno(long accno) {
	this.accno = accno;
}
public String getAccholder() {
	return accholder;
}
public void setAccholder(String accholder) {
	this.accholder = accholder;
}
public boolean isMoneytransfer() {
	return moneytransfer;
}
public void setMoneytransfer(boolean moneytransfer) {
	this.moneytransfer = moneytransfer;
}
public boolean isDeposit() {
	return deposit;
}
public void setDeposit(boolean deposit) {
	this.deposit = deposit;
}
public boolean isWithdrawal() {
	return withdrawal;
}
public void setWithdrawal(boolean withdrawal) {
	this.withdrawal = withdrawal;
}
public boolean isChequebook() {
	return chequebook;
}
public void setChequebook(boolean chequebook) {
	this.chequebook = chequebook;
}
public double getBalance() {
	return balance;
}
public void setBalance(double balance) {
	this.balance = balance;
}
public long getUserid() {
	return userid;
}
public void setUserid(long userid) {
	this.userid = userid;
}

public long getMobilenum() {
	return mobilenum;
}

public void setMobilenum(long mobilenum) {
	this.mobilenum = mobilenum;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

}
