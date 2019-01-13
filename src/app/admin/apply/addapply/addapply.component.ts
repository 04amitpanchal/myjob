import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddapplyService } from 'src/app/services/addapply.service';
import { applyclass } from 'src/app/classes/apply';

@Component({
  selector: 'app-addapply',
  templateUrl: './addapply.component.html',
  styleUrls: ['./addapply.component.css']
})
export class AddapplyComponent implements OnInit {
 apply_id:number;
 fk_emp_id:string;
 fk_job_id:number;
 apply_date:string;
  constructor(
    private route:Router,
    private addapply:AddapplyService
    ) { }

  ngOnInit() {

  }

  AddApplyDetails(){

    this.addapply.addapply(new applyclass(this.apply_id,this.fk_emp_id,this.fk_job_id,this.apply_date)).subscribe(
      (data:any)=>{
        // alert("added");
        console.log(data);
        this.route.navigate(['menu/apply']);
      }
    );

  }

  backPage(){
    this.route.navigate(['menu/apply']);
  }

}
