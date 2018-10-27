import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adminclass } from '../classes/adminclass';

@Injectable({
  providedIn: 'root'
})
export class UpdaterecService {
  updaterecUrl:string="http://localhost:3000/updaterec/";
  getrecByIdUrl:string="http://localhost:3000/getRecById/";
  constructor(private _http:HttpClient) { }

  updaterec(item:FormData){
        return this._http.post(this.updaterecUrl,item);
 }

 getrecById(id:string){
      // alert(id);

     return this._http.get(this.getrecByIdUrl+id);
 }
}
