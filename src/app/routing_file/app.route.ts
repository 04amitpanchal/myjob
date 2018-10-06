import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { RecruiterComponent } from '../admin/recruiter/recruiter.component';
import { EmployeeComponent } from '../admin/employee/employee.component';


const arr: Routes=[
  {path:'',component:AdminComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'employee',component:EmployeeComponent}
];

export const routing=RouterModule.forRoot(arr);
