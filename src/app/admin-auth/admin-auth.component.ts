import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  validator:undefined|String;
  constructor(private adser:AdminService){}
check(){}
signin(data:any){
  console.log(data)
  this.adser.adminlogin(data);
  if(this.adser.isloginerror){
    this.validator="UserName Or Password is InCorrect";
  }
  setTimeout(()=>{
    this.validator = undefined;
  },3000)
}
}
