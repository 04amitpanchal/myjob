import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AdminserviceService } from '../../../services/adminservice.service';
import { emp } from '../../../classes/employee';
import { ActivatedRoute } from '@angular/router';
import { GetEmpByIdService } from '../../../services/get-emp-by-id.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
selected='option2';
emp_id:string;
id:string;
emp_password:string;
first_name:string;
last_name:string;
emp_photo:string;
  constructor(private _getEmp:GetEmpByIdService,private _aroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._aroute.snapshot.params['id'];
    this._getEmp.getEmpDetailsById(this.id).subscribe(
      (data:any)=>{
        this.emp_id=data[0].emp_id;
        this.emp_password=data[0].emp_password;
        this.first_name=data[0].first_name;
        this.last_name=data[0].last_name;
      }
    );
  }

}
