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
import { RemovejobService } from 'src/app/services/removejob.service';
import { element } from '@angular/core/src/render3/instructions';

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
       private jobs:ShowjobService,
       private remove_job:RemovejobService
    ){}

  ngOnInit() {
    this.jobs.showjobdetails().subscribe(
      (data:job[])=>{
        this.getjob=data;
        this.dataSource.data=data;
        console.log(data);
        this.dataSource.paginator = this.paginator;


      }
    );
  }


    onchange(){
    if (this.citem) {

    } else {

    }
  }

  onUpdateJob(element:job){
    this._route.navigate(['menu/updatejob',element.job_id]);
  }

  onRemove()
  {

      if (this.getjob==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.remove_job.removeJob(this.getjob).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.getjob.length;this.i++){
          if (this.getAlljobs.find(x=>x==this.getjob[this.i])) {
            this.getAlljobs.splice(this.getAlljobs.indexOf(this.getjob[this.i]));
          }
         }
         this.ngOnInit();
         this.dataSource.data=this.getAlljobs;
        });
      }


  }




  // updateJob(element:job){
  //   this._route.navigate(['/updateEmp',element.]);

  // }

  chackChanged(item:job){
    if (this.getjob.find(x=>x==item)) {
      this.getjob.splice(this.getjob.indexOf(item),1);
    }
    else{
      alert(" not found00");
      this.getjob.push(item);
    }
    console.log(this.getjob);
  }



  AddJob()
  {
    this._route.navigate(['menu/addjob']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  }


// }
