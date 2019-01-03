import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {



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
