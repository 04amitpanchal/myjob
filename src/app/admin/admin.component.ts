import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {

  }
  onrec(){
    this._route.navigate(['/recruiter']);
  }
  onemp(){
    this._route.navigate(['/employee']);
  }


}
