import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { RecruiterComponent } from '../admin/recruiter/recruiter.component';
import { EmployeeComponent } from '../admin/employee/employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MenuComponent } from '../menu/menu.component';
import { AddrecruiterComponent } from '../addrecruiter/addrecruiter.component';
import { UpdateEmpComponent } from '../admin/employee/update-emp/update-emp.component';


const arr: Routes=[
  {path:'',component:AdminComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'addrecruiter',component:AddrecruiterComponent},
  {path:'updateEmp/:id',component:UpdateEmpComponent}
];


export const routing=RouterModule.forRoot(arr);
