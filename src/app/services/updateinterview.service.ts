import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewClass } from '../classes/interview';

@Injectable({
  providedIn: 'root'
})
export class UpdateinterviewService {
  updateinterviewUrl:string="http://localhost:3000/updateInterview/";
  getinterviewByidUrl:string="http://localhost:3000/getByIdForInterview/";
  constructor(private _http:HttpClient) { }


  updateInterview(item:InterviewClass){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updateinterviewUrl,body,{headers:h});
  }

  getInterviewByid(id){
    return this._http.get(this.getinterviewByidUrl+id);
  }
}
