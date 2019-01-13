import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatejobService } from 'src/app/services/updatejob.service';
import { job } from 'src/app/classes/jobclass';
import { ujobclass } from 'src/app/classes/updatejobclass';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {
  jid:number;
  updatearr:ujobclass[]=[];
  job_id:number;
  fk_rec_id:string;
  job_title:string;
  posted_date:string;
  skill_req:string;
  job_desc:string;
  salary_min:number;
  salary_max:number;
  fk_company_name:string;
  constructor(private route:Router,private updatejobobj:UpdatejobService,private aroute:ActivatedRoute) { }

  ngOnInit() {

    this.jid=this.aroute.snapshot.params['id'];
    // alert(this.jid);
    this.updatejobobj.getjobByid(this.jid).subscribe(
      (data:ujobclass[])=>{
        console.log(data);
        this.jid=data[0].job_id;
        this.fk_rec_id=data[0].fk_rec_id;
        this.job_title=data[0].job_title;
        this.posted_date=data[0].posted_date;
        this.skill_req=data[0].skill_req;
        this.job_desc=data[0].job_desc;
        this.salary_min=data[0].salary_min;
        this.salary_max=data[0].salary_max;
        this.fk_company_name=data[0].fk_company_name;
      }
    );

  }

  updateJobDetails(){
    this.jid=this.aroute.snapshot.params['id'];
    this.job_id=this.jid;
    this.updatejobobj.updatejob(new ujobclass(this.job_id,this.fk_rec_id,this.job_title,this.posted_date,this.skill_req,this.job_desc,this.salary_min,this.salary_max,this.fk_company_name)).subscribe(
      (data:any)=>{
        console.log(data);
        this.updatearr.push(new ujobclass(this.job_id,this.fk_rec_id,this.job_title,this.posted_date,this.skill_req,this.job_desc,this.salary_min,this.salary_max,this.fk_company_name));
        this.route.navigate(['menu/job']);
      }
    );

  }

  backPage(){
    this.route.navigate(['menu/job']);
  }

}
