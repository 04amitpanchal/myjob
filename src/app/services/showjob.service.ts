import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { showj } from '../classes/showjob';

@Injectable({
  providedIn: 'root'
})
export class ShowjobService {
  showjobUrl:string="http://localhost:3000/showjob/";
  constructor(private _http:HttpClient) { }

  showjobdetails(){
    // let h=new HttpHeaders().set('Content-Type','application/json');
    // let body=JSON.stringify(item);
    return this._http.get(this.showjobUrl);
  }

}
