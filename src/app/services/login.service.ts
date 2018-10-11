import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Adminclass } from '../classes/adminclass';
import { emp } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginVerifyUrl:string="http://localhost:3000/loginVerify/";
  constructor(private _http:HttpClient) { }

  loginVerify(item:Adminclass){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.loginVerifyUrl,body,{headers:h});
  }

}
