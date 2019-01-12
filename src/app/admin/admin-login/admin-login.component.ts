import { Component, OnInit } from '@angular/core';
import { AdminverifyService } from 'src/app/services/adminverify.service';
import { Adminclass } from 'src/app/classes/adminclass';
import { AdminLogin } from 'src/app/classes/adminLoginclass';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { EmailClass } from 'src/app/classes/emailclass';
import { p } from '@angular/core/src/render3';
import { GetAdminPasswordService } from 'src/app/services/get-admin-password.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string;
  password:string;
  originalPassword:string;
    constructor(private adminLoginVerigyObj:AdminverifyService,private route:Router,
      private emailObj:EmailService,
      private getPasswordObj:GetAdminPasswordService) { }

  ngOnInit() {

  }

  onCheck()
  {
    // alert("In function");
    this.getPasswordObj.sendPassword(this.username).subscribe(
      (data:any)=>{
          this.originalPassword=data[0].password;

          console.log(this.originalPassword);
      }
    );
    this.adminLoginVerigyObj.adminverify(new  AdminLogin(this.username,this.password)).subscribe(
      (data:AdminLogin[])=>{

        if (data.length==1) {
          console.log(data);
          this.route.navigate(['/menu']);

        } else {
          alert("Please enter valid user name and password");
          this.password="";
        }
        console.log("original password"+this.originalPassword);
      }

    );


  }

  forgotPassword(){
    this.emailObj.email(new EmailClass(this.username,this.originalPassword,"")).subscribe(
      (data:any)=>{

        console.log(data);
      }
    );
  }


}
