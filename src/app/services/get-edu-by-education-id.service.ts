import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetEduByEducationIdService {

  getEducationByIdUrl:string="http://localhost:3000/getEducationById/";
  constructor(private _http:HttpClient) { }

  getEducationByEducationId(id){
    return this._http.get(this.getEducationByIdUrl+id);
  }
}
