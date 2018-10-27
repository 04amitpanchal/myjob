import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddEmpService {
  addEmpUrl:string="http://localhost:3000/addEmp/";
  constructor(private _http:HttpClient) { }
  addEmp(item:FormData){
    console.log(item);
    return this._http.post(this.addEmpUrl,item);
 }

}
