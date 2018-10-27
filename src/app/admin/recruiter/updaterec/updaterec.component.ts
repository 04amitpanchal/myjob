import { Component, OnInit } from '@angular/core';
import { AddrecService } from 'src/app/services/addrec.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateEmpDetailsService } from 'src/app/services/update-emp-details.service';
import { UpdaterecService } from 'src/app/services/updaterec.service';
import { Adminclass } from 'src/app/classes/adminclass';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-updaterec',
  templateUrl: './updaterec.component.html',
  styleUrls: ['./updaterec.component.css']
})
export class UpdaterecComponent implements OnInit {

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
 id:string;
   constructor(private updaterec:UpdaterecService,private _route:Router,private _aroute:ActivatedRoute,private updateEmpDetailsObj:UpdateEmpDetailsService) { }

     ngOnInit() {
      this.id=this._aroute.snapshot.params['id'];
      this.updaterec.getrecById(this.id).subscribe(
        (data:Adminclass[])=>{
          // console.log(data);
          this.rec_id=data[0].rec_id;
          this.password=data[0].password;
          this.company_name=data[0].company_name;
          this.company_web=data[0].company_web;
          this.company_type=data[0].company_type;
          this.adderess=data[0].adderess;
        }
      );
     }

    onChange(value){
       this.selectedFile=<File>value.target.files[0];
     }


     updaterecDetails()
     {
       if(this.rec_photo==null){
         alert('choose image first');
       }
       else{
       const fd=new FormData();
       fd.append('rec_id',this.rec_id);
       fd.append('password',this.password);
       fd.append('company_name',this.company_name);
       fd.append('company_web',this.company_web);
       fd.append('adderess',this.adderess);
       fd.append('company_type',this.company_type);
       fd.append('image',this.selectedFile,this.selectedFile.name);
      //  console.log(fd);
        this.updaterec.updaterec(fd).subscribe(
          (data:any)=>{
            console.log("sucess");
          }
        );
      }
     }

     backPage()
     {
         this._route.navigate(['/recruiter']);
     }

   }


