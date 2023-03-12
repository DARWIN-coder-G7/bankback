import {EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  issellerloggedin = new BehaviorSubject<boolean>(false);
  isloginerror = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  getalluser(){
    return this.http.get<any[]>(`http://localhost:8080/api/user`)
  }
  blockuser(id:number , status:any, data:any){
    
    return this.http.put(`http://localhost:8080/api/user?status=${status}&accno=${id}`,data)
  }
  accgetbyuserid(userid:number){
    console.log(userid)
    return this.http.get<any[]>(`http://localhost:8080/api/acc/byuser?query=${userid}`);
  }
  getaccbyaccid(accid:any){
    return this.http.get<any[]>(`http://localhost:8080/api/acc/${accid}`)
  }
  updateaccdata(accdata:any){
    return this.http.put(`http://localhost:8080/api/acc/${accdata.accid}`,accdata)
  }
  depositcash(data:any){
    return this.http.put(`http://localhost:8080/api/acc/credit?accno=${data.id}&amount=${data.amount}`,data)
  }
  debitcash(data:any){
    return this.http.put(`http://localhost:8080/api/acc/debit?accno=${data.id}&amount=${data.amount}`,data)
  }
  gettransacbyaccno(accno:any){
    return this.http.get<any[]>(`http://localhost:8080/api/transac/${accno}`);
  }
  savetransacdata(data:any){
    return this.http.post<any[]>(`http://localhost:8080/api/transac`,data);
  }
  
  userlogin(data:any){
    this.http.get(`http://localhost:8080/api/user/${data.name}/${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.log(result);
    if(result && result.body )
    {
      this.isloginerror.emit(false)
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['userhome'])
    }else{
      console.warn("login failed");
      this.isloginerror.emit(true)
    }
    })
    console.warn(data)
  }
  usersignup(data:any){
    this.http.post('http://localhost:8080/api/user',data,
    {observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['userhome']);
      }
    })
  }
  adminlogin(data:any){
    this.http.get(`http://localhost:8080/api/admin/${data.adminName}/${data.adminKey}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.log(result);
    if(result && result.body )
    {
      this.isloginerror.emit(false)
      localStorage.setItem('admin',JSON.stringify(result.body))
      this.router.navigate(['adminhome'])
    }else{
      console.warn("login failed");
      this.isloginerror.emit(true)
    }
    })
  }
  createaccount(data:any){
     return this.http.post(`http://localhost:8080/api/acc`,data)
  }
}
