import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { RecruiterComponent } from '../admin/recruiter/recruiter.component';
import { EmployeeComponent } from '../admin/employee/employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MenuComponent } from '../menu/menu.component';
import { AddrecruiterComponent } from '../addrecruiter/addrecruiter.component';
import { UpdateEmpComponent } from '../admin/employee/update-emp/update-emp.component';
import { EmpAddComponent } from '../admin/employee/emp-add/emp-add.component';
import { AddrecComponent } from '../admin/recruiter/addrec/addrec.component';
import { UpdaterecComponent } from '../admin/recruiter/updaterec/updaterec.component';
import { JobsComponent } from '../admin/jobs/jobs.component';
import { AddjobComponent } from '../admin/jobs/addjob/addjob.component';
import { UpdatejobComponent } from '../admin/jobs/updatejob/updatejob.component';
import { ApplyComponent } from '../admin/apply/apply.component';
import { InterviewComponent } from '../admin/interview/interview.component';
import { AddapplyComponent } from '../admin/apply/addapply/addapply.component';
import { UpdateapplyComponent } from '../admin/apply/updateapply/updateapply.component';
import { AddinterviewComponent } from '../admin/interview/addinterview/addinterview.component';
import { UpdateinterviewComponent } from '../admin/interview/updateinterview/updateinterview.component';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { AppliedJobComponent } from '../admin/employee/applied-job/applied-job.component';
import { SignupComponent } from '../admin/signup/signup.component';
import { EducationComponent } from '../admin/education/education.component';
import { ResponseComponent } from '../admin/response/response.component';
import { AddEducationComponent } from '../admin/education/add-education/add-education.component';
import { UpdateEducationComponent } from '../admin/education/update-education/update-education.component';
import { AddResponseComponent } from '../admin/response/add-response/add-response.component';
import { UpdateResponseComponent } from '../admin/response/update-response/update-response.component';



const arr: Routes=[
  {path:'userLogin',component:UserLoginComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'',component:EmployeeComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'recruiter',component:RecruiterComponent},
    {path:'job',component:JobsComponent},
    {path:'updaterec/:id',component:UpdaterecComponent},
    {path:'addrec',component:AddrecComponent},
    {path:'updateEmp/:id',component:UpdateEmpComponent},
    {path:'empAdd',component:EmpAddComponent},
    {path:'addjob',component:AddjobComponent},
    {path:'updatejob/:id',component:UpdatejobComponent},
    {path:'apply',component:ApplyComponent},
  {path:'interview',component:InterviewComponent},
  {path:'addApplyDetails',component:AddapplyComponent},
  {path:'updateApplyDetails/:id',component:UpdateapplyComponent},
  {path:'addinterview',component:AddinterviewComponent},
  {path:'updateinterview/:id',component:UpdateinterviewComponent},
{path:'Applied_job/:id',component:AppliedJobComponent},
{path:'education',component:EducationComponent},
{path:'response',component:ResponseComponent},
{path:'addeducation',component:AddEducationComponent},
{path:'updateeducation/:id',component:UpdateEducationComponent},
{path:'addresponse',component:AddResponseComponent},
{path:'updateresponse/:id',component:UpdateResponseComponent}
  ]},
  {path:'',component:AdminLoginComponent},
  {path:'signup',component:SignupComponent}

];


export const routing=RouterModule.forRoot(arr);
