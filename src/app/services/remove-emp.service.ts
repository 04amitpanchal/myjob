import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class RemoveEmpService {
  removeEmpUrl:string="http://localhost:3000/removeEmp/";
  constructor(private _http:HttpClient) { }

  removeEmp(item:emp[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.removeEmpUrl,body,{headers:h});
  }
}
