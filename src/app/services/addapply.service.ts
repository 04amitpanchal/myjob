import { Injectable } from '@angular/core';
import { applyclass } from '../classes/apply';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddapplyService {
  addApplyUrl:string="http://localhost:3000/addapply/";
  constructor(private _http:HttpClient) { }

  addapply(item:applyclass){
    alert(item.apply_date);
    let h=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.addApplyUrl,body,{headers:h});
 }
}
