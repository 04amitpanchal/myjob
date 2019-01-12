import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { job } from '../classes/jobclass';


@Injectable({
  providedIn: 'root'
})
export class RemovejobService {

  removeJobUrl:string="http://localhost:3000/removejob/";
  constructor(private _http:HttpClient) { }

  removeJob(item:job[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.removeJobUrl,body,{headers:h});
  }
}
