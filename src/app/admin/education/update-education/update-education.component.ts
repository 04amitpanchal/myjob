import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllEducationService } from 'src/app/services/get-all-education.service';
import { UpdateEducationService } from 'src/app/services/update-education.service';
//import { AddResponseService } from 'src/app/services/add-response.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EducationClass } from "src/app/classes/education";
import { GetEduByEducationIdService } from "src/app/services/get-edu-by-education-id.service";

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  edu_id:number;
  fk_emp_id:string;
  emp_qual:string;
  emp_pass_year:number;
  emp_uni:string;
  emp_exp:number;
  emp_skill1:string;
  emp_skill2:string;
  id:number;

  constructor(private _route:Router,
    private _getEducationById:GetEduByEducationIdService,
    private _aroute:ActivatedRoute,
    private _updatEducation:UpdateEducationService)
     { }

  ngOnInit() {
    this.id=this._aroute.snapshot.params['id'];
    console.log(this.id);
    this._getEducationById.getEducationByEducationId(this.id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.edu_id=data[0].edu_id;
        this.fk_emp_id=data[0].fk_emp_id;
        this.emp_qual=data[0].emp_qual;
        this.emp_pass_year=data[0].emp_pass_year;
        this.emp_uni=data[0].emp_uni;
        this.emp_exp=data[0].emp_exp;
        this.emp_skill1=data[0].emp_skill1;
        this.emp_skill2=data[0].emp_skill2;
      }
    );
  }

  updateEducationDetails()
  {
    // const fd=new FormData();


    // fd.append('fk_emp_id',this.fk_emp_id);
    // fd.append('emp_quals',this.emp_qual);
    // fd.append('emp_pass_year',this.emp_pass_year.toString());
    // fd.append('emp_uni',this.emp_uni);
    // fd.append('emp_exp',this.emp_exp.toString());
    // fd.append('emp_skill1',this.emp_skill1);
    // fd.append('mp_skill2',this.emp_skill2);
    this.id=this._aroute.snapshot.params['id'];
    alert(this.id);
    this._updatEducation.updateEducation(this.id,new EducationClass(this.edu_id,this.fk_emp_id,this.emp_qual,this.emp_pass_year,this.emp_uni,this.emp_exp,this.emp_skill1,this.emp_skill2)).subscribe(
      (data:any)=>{
              console.log(data);
              alert("details updaated sucessfully");
              this._route.navigate(['menu/education']);
            }
    );


  }


  backPage()
  {
      this._route.navigate(['menu/education']);
  }


}

