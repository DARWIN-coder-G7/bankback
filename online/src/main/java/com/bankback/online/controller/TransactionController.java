package com.bankback.online.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bankback.online.entity.TransactionData;
import com.bankback.online.service.TransacService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/transac")
public class TransactionController {
public TransactionController(TransacService tservice) {
		super();
		this.tservice = tservice;
	}

private TransacService tservice;

// an api to create transaction
@PostMapping()
public ResponseEntity<TransactionData> savetransferdata(@RequestBody TransactionData transacdata){
	return new ResponseEntity<TransactionData>(tservice.savedata(transacdata),HttpStatus.OK);
}
// an api to getall
@GetMapping()
public ResponseEntity<List<TransactionData>> listalldata(){
	return new ResponseEntity<List<TransactionData>>(tservice.getall(),HttpStatus.OK);
}
//http://localhost:8080/api/transac/15
@GetMapping("{accno}")
public ResponseEntity<List<TransactionData>> listbyaccno(@PathVariable long accno){
	return new ResponseEntity<List<TransactionData>>(tservice.getByaccno(accno),HttpStatus.OK);
}
//http://localhost:8080/api/transac/status?type=debit
@GetMapping("status")
public ResponseEntity<List<TransactionData>> listbystatus(@RequestParam("type") String type){
	return new ResponseEntity<List<TransactionData>>(tservice.getbystatus(type),HttpStatus.OK);
}

}
