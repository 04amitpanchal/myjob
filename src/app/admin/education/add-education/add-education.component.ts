import { Component, OnInit } from '@angular/core';
import { AddEducationService } from 'src/app/services/add-education.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllEducationService } from 'src/app/services/get-all-education.service';
import { UpdateEducationService } from 'src/app/services/update-education.service';
import { EducationClass } from 'src/app/classes/education';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  edu_id:number;
  fk_emp_id:string;
  emp_qual:string;
  emp_pass_year:number;
  emp_uni:string;
  emp_exp:number;
  emp_skill1:string;
  emp_skill2:string;

  constructor(private addEducation:AddEducationService,
    private _route:Router,
    private _getEducation:GetAllEducationService,
    private _aroute:ActivatedRoute,
    private updateEducationObj:UpdateEducationService) { }

  ngOnInit() {

  }

  AddEducationDetails()
  {
    this.addEducation.addEducation(new EducationClass(this.edu_id,this.fk_emp_id,this.emp_qual,this.emp_pass_year,this.emp_uni,this.emp_exp,this.emp_skill1,this.emp_skill2)).subscribe(
      (data:EducationClass)=>{
        console.log(data);
        alert("Succfully Education Data Added");
        this._route.navigate(['menu/education']);
      }
    );


  }


  backPage()
  {
      this._route.navigate(['menu/education']);
  }

}
