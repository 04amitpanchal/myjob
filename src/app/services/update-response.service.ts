import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseClass } from '../classes/response';

@Injectable({
  providedIn: 'root'
})
export class UpdateResponseService {

  updateResponseDetailsUrl:string="http://localhost:3000/response/";
  constructor(private _http:HttpClient) { }

  updateResponse(id,item:ResponseClass){

      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
      console.log(item);
      return this._http.put(this.updateResponseDetailsUrl+id,body,{headers:h});
    }
}
