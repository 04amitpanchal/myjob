import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {LoginService } from '../../app/services/login.service';
import { Adminclass} from '../../app/classes/adminclass';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
rec_id:string;
password:string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    ngOnInit(){

    }
  constructor(private breakpointObserver: BreakpointObserver,private _loginVerifyobj:LoginService,private _route:Router) {}

  onloginVerify(){
    // console.log("in funcation");
    this._loginVerifyobj.loginVerify(new Adminclass(this.rec_id,this.password)).subscribe(
      (data:Adminclass[])=>{
        console.log(data);
        if (data.length>=1){
              this._route.navigate(['']);
        } else {
        alert("Your User id and Password Not Matched Please try again");
        }
      }
    );
  }
}






