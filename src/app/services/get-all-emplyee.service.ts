import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetAllEmplyeeService {
  getAllEmplyeesUrl:string="http://localhost:3000/getAllEmployee";
  constructor(private _http:HttpClient) { }

  getAllEmployees(){
    return this._http.get(this.getAllEmplyeesUrl);
  }
}
