import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-page',
  templateUrl: './visitor-page.component.html',
  styleUrls: ['./visitor-page.component.css']
})
export class VisitorPageComponent implements OnInit {
  email:String;
  password:string;
  constructor() { }

  ngOnInit() {
  }

  onUserVerify(){

  }

}
