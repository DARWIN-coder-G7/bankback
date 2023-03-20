package com.bankback.online.entity;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import static javax.persistence.TemporalType.TIMESTAMP;



@Entity
public class TransactionData {
	public TransactionData() {
		super();
	}
	public TransactionData(Long transactionid, Long fromaccno, Long toaccno, double amount, String status,
			Date createingDate) {
		super();
		this.transactionid = transactionid;
		this.Fromaccno = fromaccno;
		this.toaccno = toaccno;
		this.amount = amount;
		this.status = status;
		this.createingDate = createingDate;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long transactionid;
	private Long Fromaccno;
	private Long toaccno;
	private double amount;
	private String status;
	@Temporal(TIMESTAMP)
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date createingDate;
	@PrePersist
	private void onCreat() {
		createingDate = new Date();
	}
	public Long getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(Long transactionid) {
		this.transactionid = transactionid;
	}
	public Long getFromaccno() {
		return Fromaccno;
	}
	public void setFromaccno(Long fromaccno) {
		Fromaccno = fromaccno;
	}
	public Long getToaccno() {
		return toaccno;
	}
	public void setToaccno(Long toaccno) {
		this.toaccno = toaccno;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getCreateingDate() {
		return createingDate;
	}
	public void setCreateingDate(Date createingDate) {
		this.createingDate = createingDate;
	}
	
}
