import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { routing } from "../app/routing_file/app.route";
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule,MatDatepickerModule,MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatSelectModule, MatOptionModule, ErrorStateMatcher } from '@angular/material';
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { JobsComponent } from './admin/jobs/jobs.component';
import { VisitorPageComponent } from './visitor-page/visitor-page.component';
import { AddjobComponent } from './admin/jobs/addjob/addjob.component';
import { RemovejobComponent } from './admin/jobs/removejob/removejob.component';
import { UpdatejobComponent } from './admin/jobs/updatejob/updatejob.component';
import { ApplyComponent } from './admin/apply/apply.component';
import { InterviewComponent } from './admin/interview/interview.component';
import { AddapplyComponent } from './admin/apply/addapply/addapply.component';
import { UpdateapplyComponent } from './admin/apply/updateapply/updateapply.component';
import { AddinterviewComponent } from './admin/interview/addinterview/addinterview.component';
import { UpdateinterviewComponent } from './admin/interview/updateinterview/updateinterview.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AppliedJobComponent } from './admin/employee/applied-job/applied-job.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ResponseComponent } from "./admin/response/response.component";
import { EducationComponent } from "./admin/education/education.component";
import { AddEducationComponent } from './admin/education/add-education/add-education.component';
import { UpdateEducationComponent } from './admin/education/update-education/update-education.component';
import { AddResponseComponent } from './admin/response/add-response/add-response.component';
import { UpdateResponseComponent } from './admin/response/update-response/update-response.component';

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
    TempComponent,
    SidebarComponent,
    JobsComponent,
    VisitorPageComponent,
    AddjobComponent,
    RemovejobComponent,
    UpdatejobComponent,
    ApplyComponent,
    InterviewComponent,
    AddapplyComponent,
    UpdateapplyComponent,
    AddinterviewComponent,
    UpdateinterviewComponent,
    AdminLoginComponent,
    AppliedJobComponent,
    SignupComponent,
    ResponseComponent,
    EducationComponent,
    AddEducationComponent,
    UpdateEducationComponent,
    AddResponseComponent,
    UpdateResponseComponent

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
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
