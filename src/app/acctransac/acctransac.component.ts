import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trandata } from 'src/data-type';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-acctransac',
  templateUrl: './acctransac.component.html',
  styleUrls: ['./acctransac.component.css']
})
export class AcctransacComponent implements OnInit {
  acid:any;
  accdata:any;
  lowbalancemsg:undefined|string;
  notifymsg:undefined|string;
  transacmsg:undefined|string;
  permissionchecker:undefined|string;
  creditcash:undefined|boolean;
  edebitcash:undefined|boolean;
  transfcash:undefined|boolean;
  transacdata:trandata={
    fromaccno:0,
    toaccno:0,
    amount:0,
    status:"default"};
 constructor(private route : ActivatedRoute,
  private root:Router,
  private adserv : AdminService){}
ngOnInit(): void {
  let accid = this.route.snapshot.paramMap.get('id');
  this.acid = accid;
 // console.log("acc id from acctransac"+ accid);
  this.adserv.getaccbyaccid(accid).subscribe((x)=>{
    console.log(x)
    this.accdata=x;
    console.log(this.accdata.deposit)
    console.log(this.accdata.withdrawal)
    console.log(this.accdata.moneytransfer)
    this.creditcash=this.accdata.deposit;
    this.edebitcash = this.accdata.withdrawal;
    this.transfcash = this.accdata.moneytransfer;
    
  })
 
}
  depositcash(amount:any){
    //console.log(this.acid);
    if(this.creditcash){
      amount.id = this.acid;
      this.adserv.depositcash(amount).subscribe((result)=>{
         this.notifymsg = "Money Deposited"
      })
      this.addeposittransaction(amount);
      setTimeout(()=>{
        this.notifymsg = undefined;
      },3000)}
    else{
      this.permissionchecker = 
      "You Are Not Permitted To Deposit Contact Bank"
     
    }
    setTimeout(()=>{
      this.permissionchecker = undefined;
    },3000)
  }
  withdrawcash(amount:any){
    if(this.edebitcash){
      let accbalance = this.accdata.balance;
      let transacamount = amount.amount;
      if(transacamount<accbalance){
        amount.id = this.acid;
      this.adserv.debitcash(amount).subscribe((result)=>{
        // console.log(result)
        this.notifymsg = " Money Debited"
      })
      this.addebittransaction(amount);
      }else{
        this.lowbalancemsg = "Low Balance !!";
        
      }
      setTimeout(()=>{
        this.lowbalancemsg= undefined;
        this.notifymsg = undefined;
      },3000)

    }
    else{
      this.permissionchecker = 
      "You Are Not Permitted To Debit Contact Bank"
     
    }
    setTimeout(()=>{
      this.permissionchecker = undefined;
    },3000)
    
    

  }
  viewtransac(){
    this.root.navigate([`/userhistory/`+this.acid]);
  }
  transferamount(details:any){
    if(this.transfcash){
       // console.log("accout data = > "+this.accdata);
    //console.log(this.accdata.balance)
    let accbalance = this.accdata.balance;
    let transacamount = details.amount;
    console.log(details);
    
    if(transacamount<accbalance){
     // console.log(transacamount+"=>"+accbalance)
     
      this.adserv.depositcash(details).subscribe((x)=>{
       // console.log("sucess"+x);
        this.sendcash(details);
        this.transacmsg = "Transaction Sucessfully Completed";
        
      })
      this.transacdata.toaccno=details.id;
      this.transacdata.amount = details.amount;
      this.addtransaction(this.transacdata);
    }else{this.lowbalancemsg= "Insufficient Balance !!!"}
    setTimeout(()=>{
      this.lowbalancemsg= undefined;
      this.transacmsg = undefined;
    },3000)
    }
    else{
      this.permissionchecker = 
      "You Are Not Permitted To Transfer Cash Contact Bank"
     
    }
    setTimeout(()=>{
      this.permissionchecker = undefined;
    },3000)
   
   
  }
  sendcash(amount:any){
    amount.id = this.acid;
      this.adserv.debitcash(amount).subscribe((result)=>{
      
      })
  }
  addeposittransaction(data:any){
    this.transacdata.fromaccno = data.id;
    this.transacdata.toaccno = data.id;
    this.accdata.amount = data.amount;
    this.accdata.status = "debit"
    this.adserv.savetransacdata(this.transacdata).subscribe((x)=>{

    })
  }
  addebittransaction(data:any){
    this.transacdata.fromaccno = data.id;
    this.transacdata.toaccno = data.id;
    this.accdata.amount = data.amount;
    this.accdata.status = "credit"
    this.adserv.savetransacdata(this.transacdata).subscribe((x)=>{

    })
  }
  addtransaction(data:any){
    //this.transacdata.fromaccno = data.id;
    //this.transacdata.toaccno = data.id;
    //this.accdata.amount = data.amount;
    this.transacdata.fromaccno=this.acid;
    this.transacdata.status = "transfer";
    console.log(this.transacdata);
    this.adserv.savetransacdata(this.transacdata).subscribe((x)=>{

    })
  }
  
}
