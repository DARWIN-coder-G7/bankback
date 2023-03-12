import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcctransacComponent } from './acctransac/acctransac.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminaccupdateComponent } from './adminaccupdate/adminaccupdate.component';
import { AdminaccviewComponent } from './adminaccview/adminaccview.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UseracchistoryComponent } from './useracchistory/useracchistory.component';

const routes: Routes = [{
  component:HomeComponent,
  path:''
},
{
  component:AdminAuthComponent,
  path:'adminauth'
},
{
  component:UserAuthComponent,
  path:'userauth'
},
{
  component:AdminHomeComponent,
  path:'adminhome'
},
{
  component:UserHomeComponent,
  path:'userhome'
},
{
  component:AdminaccviewComponent,
  path:'admin-acc-view/:id'
},
{
  component:AdminaccupdateComponent,
  path:'admin-acc-update/:id'
},
{
  component:CreateaccComponent,
  path:'createacc'
},
{
  component:UseracchistoryComponent,
  path:'userhistory/:id'
},
{
  component:AcctransacComponent,
  path:'acctransac/:id'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
