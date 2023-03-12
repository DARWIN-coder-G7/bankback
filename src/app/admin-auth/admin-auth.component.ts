import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  constructor(private adser:AdminService){}
check(){}
signin(data:any){
  console.log(data)
  this.adser.adminlogin(data);
}
}
