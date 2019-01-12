import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAdminPasswordService {


  getAdminPasswordUrl:string="http://localhost:3000/sendAdminPassword/";
  constructor(private _http:HttpClient) { }

  sendPassword(id){
  return this._http.get(this.getAdminPasswordUrl+id);
}
}
