import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { InterviewClass } from 'src/app/classes/interview';
import { InterviewService } from 'src/app/services/interview.service';

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
  inter_date:Date;
  citem:boolean;
  getAllInterviewDetails:InterviewClass[]=[];
  getInterview:InterviewClass[]=[];
  i:number;
  countries:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllInterviewDetails);
  displayedColumns: string[] = ['checkItem','inter_id','fk_emp_id','fk_job_id','fk_rec_id','inter_add','inter_date'];

  constructor(
      private interview:InterviewService,
       private _route:Router
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

  // onRemove(item:Adminclass)
  // {

  //     if (this.getemp==null) {
  //         alert("You need to select Items first Then only proceed furter");
  //     } else {
  //       this.removeEmpObj.removeEmp(this.getemp).subscribe(
  //         (x:any)=>{
  //         for(this.i=0;this.i<this.getemp.length;this.i++){
  //         if (this.getAllEmpDetails.find(x=>x==this.getemp[this.i])) {
  //           this.getAllEmpDetails.splice(this.getAllEmpDetails.indexOf(this.getemp[this.i]));
  //         }
  //        }
  //        this.dataSource.data=this.getAllEmpDetails;
  //       });
  //     }


  // }


  // updateEmp(element:emp){
  //   this._route.navigate(['/updateEmp',element.emp_id]);

  // }

  // chackChanged(item:emp){
  //   if (this.getemp.find(x=>x==item)) {
  //     this.getemp.splice(this.getemp.indexOf(item),1);
  //   }
  //   else{
  //     this.getemp.push(item);
  //   }
  //   console.log(this.getemp);
  // }
  // AddEmp()
  // {
  //   this._route.navigate(['/empAdd']);
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
