import { Component, OnInit } from '@angular/core';
import { AddrecService } from 'src/app/services/addrec.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateEmpDetailsService } from 'src/app/services/update-emp-details.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-addrec',
  templateUrl: './addrec.component.html',
  styleUrls: ['./addrec.component.css']
})
export class AddrecComponent implements OnInit{

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



   rec_id:string;
   password:string;
   company_name:string;
   company_web:string;
   adderess:string;
   rec_photo:string;
   company_type:string;
  selectedFile:File=null;
    constructor(private addrec:AddrecService,private _route:Router,private _aroute:ActivatedRoute,private updateEmpDetailsObj:UpdateEmpDetailsService) { }

      ngOnInit() {

      }

    onChange(value){
        // console.log(value);
        this.selectedFile=<File>value.target.files[0];
      }


      AddrecDetails()
      {
        if(this.rec_photo==null){
          alert('choose image first');
        }
        else{
        const fd=new FormData();
        // this.id=this._aroute.snapshot.params['id'];
        // alert(this.id);
        fd.append('rec_id',this.rec_id);
        fd.append('password',this.password);
        fd.append('company_name',this.company_name);
        fd.append('company_web',this.company_web);
        fd.append('adderess',this.adderess);
        fd.append('company_type',this.company_type);
        fd.append('image',this.selectedFile,this.selectedFile.name);
        console.log(fd);
        this.addrec.addrec(fd).subscribe(
          (data:any)=>{
                  console.log(data);
                  alert("emp added sucessfully sucessfully");
                  this._route.navigate(['menu/recruiter']);
                }
        );

      }

      }

      backPage()
      {
          this._route.navigate(['menu/recruiter']);
      }

    }



