import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  fk_rec_id:string;
  job_title:string;
  posted_date:Date;
  skill_req:string;
  job_desc:string;
  salary_min:number;
  salary_max:number;
  fk_company_name:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  AddJobDetails(){

  }

  backPage(){
    this.route.navigate(['/job']);
  }

}
