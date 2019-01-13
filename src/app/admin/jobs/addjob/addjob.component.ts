import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddjobService } from 'src/app/services/addjob.service';
import { addjob } from 'src/app/classes/addjobClass';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  da:Date;
  fk_rec_id:string;
  job_title:string;
  posted_date:string;
  skill_req:string;
  job_desc:string;
  salary_min:number;
  salary_max:number;
  fk_company_name:string;
  constructor(
    private route:Router,
    private addJob:AddjobService
    ) { }

  ngOnInit() {

  }

  AddJobDetails(){
    this.addJob.addJob(new addjob(this.fk_rec_id,this.job_title,this.posted_date,this.skill_req,this.job_desc,this.salary_min,this.salary_max,this.fk_company_name)).subscribe(
      (data:any)=>{
        alert("added");
        this.route.navigate(['menu/job']);
        console.log(data);
      }
    );

  }

  backPage(){
    this.route.navigate(['menu/job']);
  }

}
