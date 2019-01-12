import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateinterviewService } from 'src/app/services/updateinterview.service';
import { InterviewClass } from 'src/app/classes/interview';

@Component({
  selector: 'app-updateinterview',
  templateUrl: './updateinterview.component.html',
  styleUrls: ['./updateinterview.component.css']
})
export class UpdateinterviewComponent implements OnInit {
  iid:number;
  inter_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  fk_rec_id:string;
  inter_add:string;
  inter_date:string
  constructor(private route:Router,private aroute:ActivatedRoute,private updateInterviewObj:UpdateinterviewService) { }

  ngOnInit() {
    this.iid=this.aroute.snapshot.params['id'];
    // alert(this.aid);
    this.updateInterviewObj.getInterviewByid(this.iid).subscribe(
      (data:InterviewClass[])=>{
        console.log(data);
          this.inter_id=data[0].inter_id;
          this.fk_emp_id=data[0].fk_emp_id;
          this.fk_job_id=data[0].fk_job_id;
          this.fk_rec_id=data[0].fk_rec_id;
          this.inter_add=data[0].inter_add;
          this.inter_date=data[0].inter_date;
      }
    );
  }

  updateApplyDetails(){
    this.iid=this.aroute.snapshot.params['id'];
    this.inter_id=this.inter_id;
    this.updateInterviewObj.updateInterview(new InterviewClass(this.inter_id,this.fk_emp_id,this.fk_job_id,this.fk_rec_id,this.inter_add,this.inter_date)).subscribe(
      (data:any)=>{
        console.log(data);
        // this.update_arr.push(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date));
      }
    );
    this.route.navigate(['menu/interview']);
   }

   backPage(){
     this.route.navigate(['menu/interview']);
   }

}
