import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppliedJobService {
  EmpAppliedUrl:string="http://localhost:3000/empAppliedJobs/";
  constructor(private _http:HttpClient) { }
  appliedEmp(id){
    // console.log(item);
    return this._http.get(this.EmpAppliedUrl+id);
 }
}
