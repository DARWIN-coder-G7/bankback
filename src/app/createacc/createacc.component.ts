import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.css']
})
export class CreateaccComponent {
  
  constructor(private adserv:AdminService){}
createacc(data:any){
  let userstore = localStorage.getItem('user');
  let userdata = userstore && JSON.parse(userstore);
   //console.log(userdata)
   //console.log(userdata.userid)
   data.userid=userdata.userid
  //console.log(data);
  this.adserv.createaccount(data).subscribe((result)=>{
    console.log(result);
  })
}
}
