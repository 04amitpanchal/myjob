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


const arr: Routes=[
  // {path:'',component:MenuComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'addrecruiter',component:AddrecruiterComponent},
  {path:'updateEmp/:id',component:UpdateEmpComponent},
  {path:'empAdd',component:EmpAddComponent},
  {path:'addrec',component:AddrecComponent},
  {path:'updaterec/:id',component:UpdaterecComponent},
  {path:'job',component:JobsComponent},
  {path:'addjob',component:AddjobComponent},
  {path:'updatejob',component:UpdatejobComponent}
];


export const routing=RouterModule.forRoot(arr);
