import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { GetAllEmplyeeService } from 'src/app/services/get-all-emplyee.service';
import { emp } from 'src/app/classes/employee';
import { AppliedJobService } from 'src/app/services/applied-job.service';
import { appliedJobsclass } from 'src/app/classes/appliedJob';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {
  emp_photo:string;
  emp_name:string;
  fk_company_name:string;
  cn:string;
  name:string;
  job_title:string;
  apply_date:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['fk_company_name','job_title','apply_date'];

  constructor( private getEmp:GetAllEmplyeeService,private appliedJob:AppliedJobService,private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.getEmp.getAllEmployees().subscribe(
      (data:emp[])=>{
        this.dataSource.paginator = this.paginator;
        this.emp_photo=data[0].emp_photo;

      }
    );

    this.appliedJob.appliedEmp(this.aroute.snapshot.params['id']).subscribe(
      (data:any)=>{
        this.dataSource.paginator = this.paginator;
        this.fk_company_name=data[0].fk_company_name;
        this.job_title=data[0].job_title;
        this.emp_photo=data[0].emp_photo;
        this.apply_date=data[0].apply_date;
        this.emp_name=data[0].first_name+"  "+data[0].last_name;
        this.dataSource.data=data;
      }
    );
  }

}
