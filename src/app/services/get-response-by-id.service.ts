import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetResponseByIdService {

  getResponseByIdUrl:string="http://localhost:3000/getResponseById/";
  constructor(private _http:HttpClient) { }

  getResponseByResponseId(id){
    return this._http.get(this.getResponseByIdUrl+id);
  }
}
