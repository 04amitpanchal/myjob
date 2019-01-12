import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateapplyService } from 'src/app/services/updateapply.service';
import { applyclass } from 'src/app/classes/apply';

@Component({
  selector: 'app-updateapply',
  templateUrl: './updateapply.component.html',
  styleUrls: ['./updateapply.component.css']
})
export class UpdateapplyComponent implements OnInit {
  aid:number;
  apply_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  apply_date:string;
  update_arr:applyclass[
  ];
   constructor(
     private route:Router,
     private updateapply:UpdateapplyService,
     private aroute:ActivatedRoute
     ) { }

   ngOnInit() {
    this.aid=this.aroute.snapshot.params['id'];
    // alert(this.aid);
    this.updateapply.getApplyByid(this.aid).subscribe(
      (data:applyclass[])=>{
        console.log(data);
        this.apply_id=data[0].apply_id;
        this.fk_emp_id=data[0].fk_emp_id;
        this.fk_job_id=data[0].fk_job_id;
        this.apply_date=data[0].apply_date;
      }
    );

   }

   updateApplyDetails(){
    this.aid=this.aroute.snapshot.params['id'];
    this.apply_id=this.aid;
    this.updateapply.updateapply(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date)).subscribe(
      (data:any)=>{
        console.log(data);
        // this.update_arr.push(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date));
      }
    );
    this.route.navigate(['menu/apply']);
   }

   backPage(){
     this.route.navigate(['menu/apply']);
   }

}
