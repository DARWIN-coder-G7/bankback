import { Component,ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  productlist:any;
 
  //for material checking
  displayedColumns: string[] = ['accholder', 'mobilenum', 'deposit', 'withdrawal' , 'moneytransfer' , 'action'];
  dataSource :any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) Sort !:MatSort;
  //material check
  
  productstatusmessag:undefined|string;
  constructor( private admin:AdminService){}
  ngOnInit(): void {
    let userstore = localStorage.getItem('user');
  let userdata = userstore && JSON.parse(userstore);
    this.viewaccounts(userdata.userid);
  }
  viewaccounts(id:any){
    this.admin.accgetbyuserid(id).subscribe((result)=>{
      if(result){
        this.productlist = result;
        this.dataSource = new MatTableDataSource<any>(this.productlist);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.Sort;
        console.log(this.productlist);
      }
        })
  }
  listallusers(){
      
  }
  
  Filterchange(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
