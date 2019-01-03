import { Component, OnInit, ViewChild } from '@angular/core';
import { emp } from 'src/app/classes/employee';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { GetAllEmplyeeService } from 'src/app/services/get-all-emplyee.service';
import { RemoveEmpService } from 'src/app/services/remove-emp.service';
import { Router } from '@angular/router';
import { Adminclass } from 'src/app/classes/adminclass';
import { job } from 'src/app/classes/jobclass';
import { ShowjobService } from 'src/app/services/showjob.service';
import { showj } from 'src/app/classes/showjob';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {

  citem:boolean;
  getAlljobs:job[]=[];
  getjob:job[]=[];
  i:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getjob);
  // displayedColumns: string[] = ['checkItem','job_title','posted_date','skill_req','salary_min','salary_max'];
  displayedColumns:string[]=['checkItem','job_title','posted_date','job_desc','fk_company_name','action'];
  constructor(
       private _route:Router,
       private jobs:ShowjobService
    ){}

  ngOnInit() {
    this.jobs.showjobdetails().subscribe(
      (data:showj[])=>{
        this.getjob=data;
        this.dataSource.data=data;
        //this.displayedColumn.paginator = this.paginator;


      }
    );
  }


    onchange(){
    if (this.citem) {

    } else {

    }
  }

  onUpdateJob(){
    this._route.navigate(['/updatejob']);
  }

  onRemove()
  {

      if (this.getjob==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.removeEmpObj.removeEmp(this.getjob).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.getjob.length;this.i++){
          if (this.getAlljobs.find(x=>x==this.getjob[this.i])) {
            this.getAlljobs.splice(this.getAlljobs.indexOf(this.getjob[this.i]));
          }
         }
         this.dataSource.data=this.getAlljobs;
        });
      }


  }






  updateEmp(element:emp){
    this._route.navigate(['/updateEmp',element.emp_id]);

  }

  checkChanged(item:job){
    // if (this.getjob.find(x=>x==item)) {
    //   this.getjob.splice(this.getjob.indexOf(item),1);
    // }
    // else{
    //   this.getjob.push(item);
    // }
    // console.log(this.getjob);
  }
  AddJob()
  {
    this._route.navigate(['/addjob']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  }


// }
