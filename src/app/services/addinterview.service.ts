import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewClass } from '../classes/interview';

@Injectable({
  providedIn: 'root'
})
export class AddinterviewService {
  addInterviewUrl:string="http://localhost:3000/addInterview/";
  constructor(private _http:HttpClient) { }

  addInterview(item:InterviewClass){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.addInterviewUrl,body,{headers:h});
 }}
