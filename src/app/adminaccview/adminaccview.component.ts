import { Component,ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adminaccview',
  templateUrl: './adminaccview.component.html',
  styleUrls: ['./adminaccview.component.css']
})
export class AdminaccviewComponent implements OnInit {
  productlist:any;
 
  //for material checking
  displayedColumns: string[] = ['accholder', 'mobilenum', 'deposit', 'withdrawal' , 'moneytransfer' , 'action'];
  dataSource :any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) Sort !:MatSort;
  //material check
  
  productstatusmessag:undefined|string;
  constructor( private admin:AdminService , private route:ActivatedRoute){}
  ngOnInit(): void {
    let accountid = this.route.snapshot.paramMap.get('id');
    console.log("ACC ID"+accountid);
    this.viewaccounts(accountid);
  }
  viewaccounts(id:any){
    
    this.admin.accgetbyuserid(id).subscribe((result)=>{
      console.log("viewacc"+result);
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
       this.admin.getalluser().subscribe((result)=>{
        
          })
  }
  
  Filterchange(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
