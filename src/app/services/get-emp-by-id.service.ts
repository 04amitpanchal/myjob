import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetEmpByIdService {
  getEmpDetailsByIdUrl:string="http://localhost:3000/empDetailsById/";
  constructor(private _http:HttpClient) { }

  getEmpDetailsById(id){
    return this._http.get(this.getEmpDetailsByIdUrl+id);
  }
}
