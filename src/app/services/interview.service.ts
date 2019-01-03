import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  getAllIntervieDetailsUrl:string="http://localhost:3000/interview/";
  constructor(private _http:HttpClient) { }

  getAllInterviewDetails(){
    return this._http.get(this.getAllIntervieDetailsUrl);
 }
}
