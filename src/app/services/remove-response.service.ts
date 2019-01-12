import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseClass } from '../classes/response';

@Injectable({
  providedIn: 'root'
})
export class RemoveResponseService {

  removeResponseUrl:string="http://localhost:3000/removeSelectedResponse/";
  constructor(private _http:HttpClient) { }

  deleteSelectedResponse(item:ResponseClass[]){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');

    alert("remove"+body);
    return this._http.post(this.removeResponseUrl,body,{headers:h});
  }
}
