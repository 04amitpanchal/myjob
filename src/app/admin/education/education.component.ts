import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Data } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EducationClass } from 'src/app/classes/education';
import { AddEducationService } from 'src/app/services/add-education.service';
import { GetAllEducationService } from 'src/app/services/get-all-education.service';
// import { RemoveEducationService } from 'src/app/services/remove';
import { UpdateEducationService } from 'src/app/services/update-education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edu_id:number;
  fk_emp_id:string;
  emp_qual:string;
  emp_pass_year:number;
  emp_uni:string;
  emp_exp:number;
  emp_skill1:string;
  emp_skill2:string;
  getAllEducationDetails:EducationClass[]=[];
  getEducation:EducationClass[]=[];
  i:number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllEducationDetails);
  displayedColumns: string[] = ['checkItem','fk_emp_id','emp_qual','emp_pass_year','emp_uni', 'emp_exp','emp_skill1','emp_skill2','Action'];


  constructor(
    private _route:Router,
    private _getAllEducation:GetAllEducationService,
    private _addEducation:AddEducationService,
    // private _removeEducationObj:RemoveEducationServic,
    private _updateEducation:UpdateEducationService
  ) { }


  ngOnInit() {

    this._getAllEducation.getAllEducation().subscribe(
      (data:EducationClass[])=>{
        this.dataSource.paginator = this.paginator;
        // console.log(data);
        this.getAllEducationDetails=data;
        this.dataSource.data=data;
      }
    );
  }

  AddEducation(){
    this._route.navigate(['menu/addeducation']);
  }

  updateEducation(element:EducationClass){
    this._route.navigate(['menu/updateeducation',element.edu_id]);
  }



  // onRemove(item:EducationClass)
  // {
  //     if (this.getEducation==null) {
  //         alert("You need to select Items first Then only proceed furter");
  //     } else {
  //       this._removeEducationObj.deleteSelectedEducation(this.getEducation).subscribe(
  //         (x:any)=>{
  //         for(this.i=0;this.i<this.getEducation.length;this.i++){
  //         if (this.getAllEducationDetails.find(x=>x==this.getEducation[this.i])) {
  //           this.getAllEducationDetails.splice(this.getAllEducationDetails.indexOf(this.getEducation[this.i]));
  //         }
  //        }
  //        this.dataSource.data=this.getAllEducationDetails;
  //       });
  //     }
  // }

  chackChanged(item:EducationClass){
    if (this.getEducation.find(x=>x==item)) {
      this.getEducation.splice(this.getEducation.indexOf(item),1);
    }
    else{
      this.getEducation.push(item);
    }
    console.log(this.getEducation);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
