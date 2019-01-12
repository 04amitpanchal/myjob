import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllEducationService {

  getAllEducationUrl:string="http://localhost:3000/addedu/";
  constructor(private _http:HttpClient) { }

getAllEducation(){
  return this._http.get(this.getAllEducationUrl);
}
}
