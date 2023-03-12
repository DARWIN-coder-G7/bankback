import { Component,ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-useracchistory',
  templateUrl: './useracchistory.component.html',
  styleUrls: ['./useracchistory.component.css']
})
export class UseracchistoryComponent implements OnInit {
 productlist:any;
  //for material checking
  displayedColumns: string[] = ['transactionid','amount', 'createingDate', 'fromaccno', 'status' ];
  dataSource :any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) Sort !:MatSort;
  //material check
  acid:any;
  constructor(private route:ActivatedRoute,
  private adserv:AdminService){}
ngOnInit(): void {
  let accid = this.route.snapshot.paramMap.get('id');
  this.acid = accid;
  console.log(accid);
  this.gettransactionstatus();
}
gettransactionstatus(){
  this.adserv.gettransacbyaccno(this.acid).subscribe((result)=>{
    console.log(result);
    if(result){
      this.productlist = result;
      this.dataSource = new MatTableDataSource<any>(this.productlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.Sort;
      console.log(this.productlist);
    }
  })
}
Filterchange(event:Event){
  const filvalue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filvalue;
}
}
