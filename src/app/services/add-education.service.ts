import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EducationClass } from '../classes/education';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  addEducationUrl:string="http://localhost:3000/addedu/";
  constructor(private _http:HttpClient) { }
  addEducation(item:EducationClass){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addEducationUrl,body,{headers:h});
 }
}
