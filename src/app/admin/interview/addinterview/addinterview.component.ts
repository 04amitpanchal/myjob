import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddinterviewService } from 'src/app/services/addinterview.service';
import { InterviewClass } from 'src/app/classes/interview';

@Component({
  selector: 'app-addinterview',
  templateUrl: './addinterview.component.html',
  styleUrls: ['./addinterview.component.css']
})
export class AddinterviewComponent implements OnInit {
  inter_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  fk_rec_id:string;
  inter_add:string;
  inter_date:string

   constructor(
     private route:Router,
      private addinterviewobj:AddinterviewService
     ) { }

   ngOnInit() {

   }

   AddApplyDetails(){

     this.addinterviewobj.addInterview(new InterviewClass(this.inter_id,this.fk_emp_id,this.fk_job_id,this.fk_rec_id,this.inter_add,this.inter_date)).subscribe(
       (data:any)=>{
             console.log(data);
       }
     );

     this.route.navigate(['menu/interview']);
   }

   backPage(){
     this.route.navigate(['menu/interview']);
   }

}
