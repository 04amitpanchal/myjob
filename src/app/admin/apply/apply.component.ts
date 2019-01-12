import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Data } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { applyclass } from 'src/app/classes/apply';
import { ApplyService } from 'src/app/services/apply.service';
import { RemoverecService } from 'src/app/services/removerec.service';
import { RemoveapplyService } from 'src/app/services/removeapply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  user_id:string;
  apply_id:number;
  fk_emp_id:string;
  fk_job_id:number;
  apply_date:Date;
  citem:boolean;
  getAllApplyDetails:applyclass[]=[];
  getapply:applyclass[]=[];
  i:number;
  countries:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllApplyDetails);
  displayedColumns: string[] = ['checkItem','apply_id','fk_emp_id','fk_job_id','apply_date','Action'];

  constructor(
       private _route:Router,
       private _getAllapply:ApplyService,
       private removeapply:RemoveapplyService
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

  onRemove()
  {

      // if (this.getapply==null) {
      //     alert("You need to select Items first Then only proceed furter");
      // } else {
        this.removeapply.removeApply(this.getapply).subscribe(
          (x:any)=>{
            // console.log(this.getapply);
          for(this.i=0;this.i<this.getapply.length;this.i++){
          if (this.getAllApplyDetails.find(x=>x==this.getapply[this.i])) {
            this.getAllApplyDetails.splice(this.getAllApplyDetails.indexOf(this.getapply[this.i]));

          }
         }
        this.ngOnInit();
         this.dataSource.data=this.getAllApplyDetails;

        });
      // }

  }


  updateApply(element:applyclass){
      this._route.navigate(['menu/updateApplyDetails',element.apply_id]);
  }

  chackChanged(item:applyclass){
    if (this.getapply.find(x=>x==item)) {
      this.getapply.splice(this.getapply.indexOf(item),1);
    }
    else{
      this.getapply.push(item);
    }
    console.log(this.getapply);
  }
  addApply()
  {
    this._route.navigate(['menu/addApplyDetails']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
