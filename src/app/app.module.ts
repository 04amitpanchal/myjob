import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { routing } from "../app/routing_file/app.route";
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatSelectModule, MatOptionModule, ErrorStateMatcher } from '@angular/material';
import { RecruiterComponent } from './admin/recruiter/recruiter.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserLoginComponent } from './user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';
import { AddrecruiterComponent } from './addrecruiter/addrecruiter.component';
import { UpdateEmpComponent } from './admin/employee/update-emp/update-emp.component';
import { UpdaterecComponent } from './admin/recruiter/updaterec/updaterec.component';
import { EmpAddComponent } from './admin/employee/emp-add/emp-add.component';
import { AddrecComponent } from './admin/recruiter/addrec/addrec.component';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RecruiterComponent,
    EmployeeComponent,
    DashboardComponent,
    UserLoginComponent,
    MenuComponent,
    AddrecruiterComponent,
    UpdateEmpComponent,
    UpdaterecComponent,
    EmpAddComponent,
    AddrecComponent,
    TempComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
