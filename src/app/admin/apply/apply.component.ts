import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Data } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { applyclass } from 'src/app/classes/apply';
import { ApplyService } from 'src/app/services/apply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  apply_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  apply_date:Date;
  citem:boolean;
  getAllApplyDetails:applyclass[]=[];
  getemp:applyclass[]=[];
  i:number;
  countries:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllApplyDetails);
  displayedColumns: string[] = ['checkItem','apply_id','fk_emp_id','fk_job_id','apply_date','Action'];

  constructor(
       private _route:Router,
       private _getAllapply:ApplyService
    ){}

  ngOnInit() {

    this._getAllapply.getAllApplyDetails().subscribe(
      (data:applyclass[])=>{
        this.dataSource.paginator = this.paginator;
        console.log(data);
        this.getAllApplyDetails=data;
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
  AddEmp()
  {
    this._route.navigate(['/empAdd']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
