import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailClass } from '../classes/emailclass';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailURL:string="http://localhost:3000/email/";
  constructor(private _http:HttpClient) { }
email(item:EmailClass){
  let h=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  // alert(body);
  return this._http.post(this.emailURL,body,{headers:h});
}
}
