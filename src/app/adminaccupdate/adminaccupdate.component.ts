import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminaccupdate',
  templateUrl: './adminaccupdate.component.html',
  styleUrls: ['./adminaccupdate.component.css']
})
export class AdminaccupdateComponent implements OnInit{
  accountdata:any;
  constructor(private adserv:AdminService,private route:ActivatedRoute){}
  ngOnInit(): void {
    let accid = this.route.snapshot.paramMap.get('id');
    console.log(accid);
    accid && this.adserv.getaccbyaccid(accid).subscribe((result)=>{
      console.log(result);
      this.accountdata= result;
    })
  }

submit(data:any){
  console.log(data);
  let accid =this.accountdata.accid;
  console.log("acc"+ " => "+accid)
  data.accid = accid;
  this.adserv.updateaccdata(data).subscribe((result)=>{
    console.log(result);
  })
}
}
