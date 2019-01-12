import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addjob } from '../classes/addjobClass';

@Injectable({
  providedIn: 'root'
})
export class AddjobService {
  addJobUrl:string="http://localhost:3000/addJob/";
  constructor(private _http:HttpClient) { }

  addJob(item:addjob){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.addJobUrl,body,{headers:h});
 }
}
