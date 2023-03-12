import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import{MaterialModule} from '../material-module';
import { AdminaccviewComponent } from './adminaccview/adminaccview.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { AcctransacComponent } from './acctransac/acctransac.component';
import { AdminaccupdateComponent } from './adminaccupdate/adminaccupdate.component';
import { UseracchistoryComponent } from './useracchistory/useracchistory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminAuthComponent,
    UserAuthComponent,
    AdminaccviewComponent,
    CreateaccComponent,
    AcctransacComponent,
    AdminaccupdateComponent,
    UseracchistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
