import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdateEmpDetailsService {
  updateEmpDetailsUrl:string="http://localhost:3000/updateEmpDetails/";
  constructor(private _http:HttpClient) { }

  updateEmpDetails(item:FormData){
       console.log(item);
       return this._http.post(this.updateEmpDetailsUrl,item);
    }
}
