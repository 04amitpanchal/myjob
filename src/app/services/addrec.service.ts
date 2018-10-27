import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddrecService {
  addrecUrl:string="http://localhost:3000/addrecbyimg/";
  constructor(private _http:HttpClient) { }

  addrec(item:FormData){
    return this._http.post(this.addrecUrl,item);
 }
}
