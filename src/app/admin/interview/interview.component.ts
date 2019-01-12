import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { InterviewClass } from 'src/app/classes/interview';
import { InterviewService } from 'src/app/services/interview.service';
import { RemoveinterviewService } from 'src/app/services/removeinterview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  inter_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  fk_rec_id:string;
  inter_add:string;
  inter_date:string;
  citem:boolean;
  getAllInterviewDetails:InterviewClass[]=[];
  getInterview:InterviewClass[]=[];
  i:number;
  countries:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllInterviewDetails);
  displayedColumns: string[] = ['checkItem','inter_id','fk_emp_id','fk_job_id','fk_rec_id','inter_add','inter_date','Action'];

  constructor(
      private interview:InterviewService,
       private _route:Router,
       private removeInterviewObj:RemoveinterviewService
    ){}

  ngOnInit() {
    this.interview.getAllInterviewDetails().subscribe(
      (data:InterviewClass[])=>{
        this.dataSource.paginator = this.paginator;
        console.log(data);
        this.getAllInterviewDetails=data;
        this.dataSource.data=data;
      }
    );
  }

  // onchange(){
  //   if (this.citem) {

  //   } else {

  //   }
  // }

  onRemove()
  {

      if (this.getInterview==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.removeInterviewObj.removeInterview(this.getInterview).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.getInterview.length;this.i++){
          if (this.getAllInterviewDetails.find(x=>x==this.getInterview[this.i])) {
            this.getAllInterviewDetails.splice(this.getAllInterviewDetails.indexOf(this.getInterview[this.i]));
          }
         }
         this.ngOnInit();
         this.dataSource.data=this.getAllInterviewDetails;
        });
      }


  }


  updateinterview(element:InterviewClass){
    this._route.navigate(['menu/updateinterview',element.inter_id]);

  }

  chackChanged(item:InterviewClass){
    if (this.getInterview.find(x=>x==item)) {
      this.getInterview.splice(this.getInterview.indexOf(item),1);
    }
    else{
      this.getInterview.push(item);
    }
    console.log(this.getInterview);
  }


  addinterview()
  {
    this._route.navigate(['menu/addinterview']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
