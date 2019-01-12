import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllResponseService {

  getAllResponseUrl:string="http://localhost:3000/response/";
  constructor(private _http:HttpClient) { }

  getAllResponse(){
    return this._http.get(this.getAllResponseUrl);
  }
}
