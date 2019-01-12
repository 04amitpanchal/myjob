import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EducationClass } from '../classes/education';
// import { HttpClient } from 'selenium-webdriver/http';
// import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdateEducationService {

  updateEducationDetailsUrl:string="http://localhost:3000/updateEducation/";
  constructor(private _http:HttpClient) { }

  updateEducation(id,item:EducationClass){

      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
      console.log(item);
      return this._http.put(this.updateEducationDetailsUrl+id,body,{headers:h});
    }
}
