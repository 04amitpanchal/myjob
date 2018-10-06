import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { routing } from "../app/routing_file/app.route";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { RecruiterComponent } from './admin/recruiter/recruiter.component';
import { EmployeeComponent } from './admin/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RecruiterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
