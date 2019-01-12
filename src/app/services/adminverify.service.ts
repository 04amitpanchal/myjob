import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminLogin } from '../classes/adminLoginclass';


@Injectable({
  providedIn: 'root'
})
export class AdminverifyService {

  adminLoginVerifyUrl:string="http://localhost:3000/adminverify/";
  constructor(private _http:HttpClient) { }

  adminverify(item:AdminLogin){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.adminLoginVerifyUrl,body,{headers:h});
 }
}
