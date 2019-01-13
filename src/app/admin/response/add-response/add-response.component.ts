import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllResponseService } from 'src/app/services/get-all-response.service';
import { UpdateResponseService } from 'src/app/services/update-response.service';
import { AddResponseService } from 'src/app/services/add-response.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ResponseClass } from 'src/app/classes/response';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent implements OnInit { emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

res_id:number;
fk_apply_id:number;
res_staus:string;
res_desc:string;
selected_status="option1";
status:string[]=[
  'None',
  'Accept',
  'Reject'
];


constructor(private addResponse:AddResponseService,
  private _route:Router,
  private _getResponse:GetAllResponseService,
  private _aroute:ActivatedRoute,
  private updateResponseObj:UpdateResponseService) { }

ngOnInit() {

}

AddResponseDetails()
{
  this.addResponse.addResponse(new ResponseClass(this.res_id,this.fk_apply_id,this.res_staus,this.res_desc)).subscribe(
    (data:any)=>{
      console.log(data);
      //alert("Succfully Added Response Data");
      this._route.navigate(['menu/response']);
    }
  );

}





backPage()
{
    this._route.navigate(['menu/response']);
}

}



