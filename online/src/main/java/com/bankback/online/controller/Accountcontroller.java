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

import com.bankback.online.entity.AccountData;
import com.bankback.online.service.AccountService;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/acc")
public class Accountcontroller {
 
	public Accountcontroller(AccountService accserv) {
		super();
		this.accserv = accserv;
	}

	private AccountService accserv;
	
	//to create acc
	@PostMapping()
	public ResponseEntity<AccountData> createacc(@RequestBody AccountData accdata){
		
		return new ResponseEntity<AccountData>(accserv.newacc(accdata),HttpStatus.CREATED);
	}
	//http://localhost:8080/api/acc/1
	@PutMapping("{id}")
	public ResponseEntity<AccountData> updateProducts(@PathVariable("id") long id
			  ,@RequestBody AccountData products){
		return new ResponseEntity<AccountData>(accserv.saveaccount(products, id),HttpStatus.OK);
	}
	//to credit money
	//http://localhost:8080/api/acc/credit?accno=4&amount=89700
	@PutMapping("credit")

	public double creditCash(@RequestParam("amount") String amount, @RequestParam("accno") String accno) {
		double cash = Double.parseDouble(amount);
		long id = Long.parseLong(accno);
		accserv.depositCash(cash, id);
		return 0;
	}
	//to debit money
		//http://localhost:8080/api/acc/debit?accno=4&amount=89700
		@PutMapping("debit")

		public double debitCash(@RequestParam("amount") String amount, @RequestParam("accno") String accno) {
			double cash = Double.parseDouble(amount);
			long id = Long.parseLong(accno);
			accserv.debitCash(cash, id);
			return 0;
		}
		//get by id
		@GetMapping("{id}")
		public ResponseEntity<AccountData> getbyid(@PathVariable("id") long id){
			return new ResponseEntity<AccountData>(accserv.getbyid(id),HttpStatus.OK) ;
		}
		//to get by user id
		@GetMapping("/byuser")
		public ResponseEntity<List<AccountData>> getbyuserid(@RequestParam("query") long query){
			return new ResponseEntity<List<AccountData>>(accserv.getallbyuserid(query),HttpStatus.OK) ;
		}
		//to get all acc 
		@GetMapping()
		public ResponseEntity<List<AccountData>> getallacc(){
			return new ResponseEntity<List<AccountData>>(accserv.getall(),HttpStatus.OK);
		}
}
