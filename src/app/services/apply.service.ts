import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  getAllApplyDetailsUrl:string="http://localhost:3000/applyjob/";
  constructor(private _http:HttpClient) { }

  getAllApplyDetails(){
    return this._http.get(this.getAllApplyDetailsUrl);
 }
}
