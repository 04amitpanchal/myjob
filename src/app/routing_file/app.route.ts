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


const arr: Routes=[
  {path:'',component:AdminComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'addrecruiter',component:AddrecruiterComponent},
  {path:'updateEmp/:id',component:UpdateEmpComponent},
  {path:'empAdd',component:EmpAddComponent},
  {path:'addrec',component:AddrecComponent},
  {path:'updaterec/:id',component:UpdaterecComponent}
];


export const routing=RouterModule.forRoot(arr);
