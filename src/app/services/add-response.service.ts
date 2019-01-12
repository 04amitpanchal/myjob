import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseClass } from '../classes/response';

@Injectable({
  providedIn: 'root'
})
export class AddResponseService {

  addResponseUrl:string="http://localhost:3000/response/";
  constructor(private _http:HttpClient) { }
  addResponse(item:ResponseClass){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addResponseUrl,body,{headers:h});
 }
}
