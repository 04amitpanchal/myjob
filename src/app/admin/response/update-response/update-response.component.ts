import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllResponseService } from 'src/app/services/get-all-response.service';
import { UpdateResponseService } from 'src/app/services/update-response.service';
import { AddResponseService } from 'src/app/services/add-response.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ResponseClass } from "src/app/classes/response";
import { GetResponseByIdService } from "src/app/services/get-response-by-id.service";

@Component({
  selector: 'app-update-response',
  templateUrl: './update-response.component.html',
  styleUrls: ['./update-response.component.css']
})

export class UpdateResponseComponent implements OnInit {

  id:number;
  res_id:number;
  fk_apply_id:number;
  res_status:string;
  res_desc:string;
  selected_status="";
  status:string[]=[
    'None',
    'Accept',
    'Reject'
  ];

  constructor(private _route:Router,
    private _getResponseById:GetResponseByIdService,
    private _aroute:ActivatedRoute,
    private _updatResponse:UpdateResponseService)
     { }

  ngOnInit() {
    this.id=this._aroute.snapshot.params['id'];
    console.log(this.id);
    this._getResponseById.getResponseByResponseId(this.id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.res_id=data[0].res_id;
        this.fk_apply_id=data[0].fk_apply_id;
        this.res_status=data[0].res_status;
        this.res_desc=data[0].res_desc;
        // if(this.res_status=="None")
        // {
        //   this.selected_status="option1";
        // }
        // else if(this.res_status="Accept"){
        //   this.selected_status="option2";
        // }
        // else{
        //   this.selected_status="option3";
        // }

      }
    );
  }

  updateResponseDetails()
  {
    // const fd=new FormData();

    // alert(this.id);
    // fd.append('fk_apply_id',this.fk_apply_id.toString());
    // fd.append('res_status',this.res_status);
    // fd.append('res_desc',this.res_desc);
    this.id=this._aroute.snapshot.params['id'];
    this._updatResponse.updateResponse(this.id,new ResponseClass(this.res_id,this.fk_apply_id,this.res_status,this.res_desc)).subscribe(
      (data:any)=>{
              console.log(data);
              alert("details updaated sucessfully");
              this._route.navigate(['menu/response']);
      }
    );


  }


  backPage()
  {
      this._route.navigate(['menu/response']);
  }


}
