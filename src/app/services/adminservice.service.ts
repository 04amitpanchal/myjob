import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  AdminInfo:string='http://localhost:3000/admin/';
  constructor(private _http:HttpClient) { }

  getAllAdmin(){
    return this._http.get(this.AdminInfo);
  }
}
