import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  validator:undefined|String;
  constructor(private adminservice:AdminService){}
  signin(data: any): void {
    //console.warn(data)
    this.adminservice.userlogin(data);
    if(this.adminservice.isloginerror){
      this.validator="UserName Or Password is InCorrect";
    }
    setTimeout(()=>{
      this.validator = undefined;
    },3000)
    
  }
  signUp(data:any): void{
    //console.log(data)
    data.block=true;
    //console.log(data);
    this.adminservice.usersignup(data);
  }
}
