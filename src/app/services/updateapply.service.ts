import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applyclass } from '../classes/apply';

@Injectable({
  providedIn: 'root'
})
export class UpdateapplyService {
  updateapplyUrl:string="http://localhost:3000/updateapply/";
  getapplyByidUrl:string="http://localhost:3000/getapplybyid/";
  constructor(private _http:HttpClient) { }


  updateapply(item:applyclass){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    alert(item.apply_date);
    return this._http.put(this.updateapplyUrl,body,{headers:h});
  }

  getApplyByid(id){
    return this._http.get(this.getapplyByidUrl+id);
  }

}
