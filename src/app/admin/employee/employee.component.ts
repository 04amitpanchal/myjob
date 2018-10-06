import { Component, OnInit, ViewChild } from '@angular/core';
import { Adminclass } from '../../classes/adminclass';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GetAllEmplyeeService } from '../../services/get-all-emplyee.service';
import { emp } from '../../classes/employee';
import { RemoveEmpService } from '../../services/remove-emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  citem:boolean;
  getAllEmpDetails:emp[]=[];
  getemp:emp[]=[];
  i:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllEmpDetails);
  displayedColumns: string[] = ['checkItem','Empphoto','emp_id','first_name','emp_field'];

  constructor(
       private getEmp:GetAllEmplyeeService,
       private removeEmpObj:RemoveEmpService
    ){}

  ngOnInit() {
    this.getEmp.getAllEmployees().subscribe(
      (data:emp[])=>{
        this.dataSource.paginator = this.paginator;
        console.log(data);
        this.getAllEmpDetails=data;
        this.dataSource.data=data;
      }
    );
  }

  onchange(){
    if (this.citem) {

    } else {

    }
  }

  onRemove(item:Adminclass)
  {

      if (this.getemp==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.removeEmpObj.removeEmp(this.getemp).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.getemp.length;this.i++){
          if (this.getAllEmpDetails.find(x=>x==this.getemp[this.i])) {
            this.getAllEmpDetails.splice(this.getAllEmpDetails.indexOf(this.getemp[this.i]));
          }
         }
         this.dataSource.data=this.getAllEmpDetails;
        });
      }


  }


  chackChanged(item:emp){
    if (this.getemp.find(x=>x==item)) {
      this.getemp.splice(this.getemp.indexOf(item),1);
    }
    else{
      this.getemp.push(item);
    }
    console.log(this.getemp);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
