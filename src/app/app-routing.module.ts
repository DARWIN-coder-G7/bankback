import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AcctransacComponent } from './acctransac/acctransac.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminaccupdateComponent } from './adminaccupdate/adminaccupdate.component';
import { AdminaccviewComponent } from './adminaccview/adminaccview.component';
import { ContactusComponent } from './contactus/contactus.component';
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
component:AboutusComponent,
path:'ab'
},
{
  component:ContactusComponent,
  path:'con'
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
  path:'adminhome',
  canActivate:[AuthGuard]
},
{
  component:UserHomeComponent,
  path:'userhome'
},
{
  component:AdminaccviewComponent,
  path:'admin-acc-view/:id',
  canActivate:[AuthGuard]
},
{
  component:AdminaccupdateComponent,
  path:'admin-acc-update/:id',
  canActivate:[AuthGuard]
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
