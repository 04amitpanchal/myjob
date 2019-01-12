import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applyclass } from '../classes/apply';

@Injectable({
  providedIn: 'root'
})
export class RemoveapplyService {
  removeapplyUrl:string="http://localhost:3000/removeapply/";
  constructor(private _http:HttpClient) { }

  removeApply(item:applyclass[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    alert(body);
    return this._http.post(this.removeapplyUrl,body,{headers:h});
  }}
