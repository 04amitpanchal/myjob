import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Adminclass } from '../classes/adminclass';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  rec_id:string;
  password:string;
  constructor(private _loginVerifyobj:LoginService) { }

  ngOnInit() {

  }

  onLoginVerify(){
    console.log("in funcation");
    this._loginVerifyobj.loginVerify(new Adminclass(this.rec_id,this.password)).subscribe(
      (data:Adminclass[])=>{
        if (data.length>1){
          alert("yes valid user");
          console.log(data);
        } else {
          console.log("Your User id and Password Not Matched Please try again");
        }
      }
    );
  }

}
