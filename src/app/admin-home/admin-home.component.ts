import { Component,ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../services/admin.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  productlist:any;
 
  //for material checking
  displayedColumns: string[] = ['userid', 'username', 'useremail', 'userpass' , 'block' , 'action'];
  dataSource :any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) Sort !:MatSort;
  //material check
  
  productstatusmessag:undefined|string;
  constructor( private admin:AdminService){}
  ngOnInit(): void {
    this.listallusers();
  }
  viewaccounts(id:any){
    this.admin.accgetbyuserid(id).subscribe((x)=>{
      console.log(x);
    })
  }
  listallusers(){
       this.admin.getalluser().subscribe((result)=>{
        if(result){
          this.productlist = result;
          this.dataSource = new MatTableDataSource<any>(this.productlist);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.Sort;
          console.log(this.productlist);
        }
          })
  }
  blockuser(id:number){
  
     this.admin.blockuser(id,true,id).subscribe((x)=>{
      console.log("sucess" + x);
     })
  }
  unblockuser(id:number){
    this.admin.blockuser(id,false,id).subscribe((x)=>{
      console.log("sucess" + x);
     })
  }
  Filterchange(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
