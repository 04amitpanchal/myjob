import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Adminclass } from '../classes/adminclass';
@Injectable({
  providedIn: 'root'
})
export class RemoverecService {
  removeRecUrl:string="http://localhost:3000/removeRec";
  constructor(private _http:HttpClient) { }

  removeRec(item:Adminclass[]){

      let h=new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(item);
      alert(body);
      return this._http.post(this.removeRecUrl,body,{headers:h});
  }
}
