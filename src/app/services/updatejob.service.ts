import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { job } from '../classes/jobclass';
import { ujobclass } from '../classes/updatejobclass';

@Injectable({
  providedIn: 'root'
})
export class UpdatejobService {
  updateJobUrl:string="http://localhost:3000/updateJob/";
  getJobByidUrl:string="http://localhost:3000/getjobbyid/";
  constructor(private _http:HttpClient) { }


  updatejob(item:ujobclass){
    // alert(item.job_id);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.updateJobUrl,body,{headers:h});
  }

  getjobByid(id){
    return this._http.get(this.getJobByidUrl+id);
  }}
