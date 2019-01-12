import { Injectable } from '@angular/core';
import { InterviewClass } from '../classes/interview';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoveinterviewService {
  removeInterviewUrl:string="http://localhost:3000/removeInterview/";
  constructor(private _http:HttpClient) { }

  removeInterview(item:InterviewClass[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.removeInterviewUrl,body,{headers:h});
  }
}
