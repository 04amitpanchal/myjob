import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Data } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ResponseClass } from 'src/app/classes/response';
import { AddResponseService } from 'src/app/services/add-response.service';
import { GetAllResponseService } from 'src/app/services/get-all-response.service';
import { RemoveResponseService } from 'src/app/services/remove-response.service';
import { UpdateResponseService } from 'src/app/services/update-response.service';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  res_id:number;
  fk_apply_id:number;
  res_status:string;
  res_desc:string;
  // citem:boolean;
  getAllResponseDetails:ResponseClass[]=[];
  getResponse:ResponseClass[]=[];
  i:number;
  // countries:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(this.getAllResponseDetails);
  displayedColumns: string[] = ['checkItem','res_id','fk_apply_id','res_status','res_desc','Action'];


  constructor(
    private _route:Router,
    private _getAllRespone:GetAllResponseService,
    private _addResponse:AddResponseService,
    private _removeResponseObj:RemoveResponseService,
    private _updateResponse:UpdateResponseService
  ) { }


  ngOnInit() {

    this._getAllRespone.getAllResponse().subscribe(
      (data:ResponseClass[])=>{
        this.dataSource.paginator = this.paginator;
        console.log(data);
        this.getAllResponseDetails=data;
        this.dataSource.data=data;
      }
    );



    // this._getAllRespone.getAllResponse().subscribe(
    //   (data:ResponseClass[])=>{
    //     this.dataSource.paginator = this.paginator;
    //     console.log(data);
    //     this.getAllResponseDetails=data;
    //     this.dataSource.data=data;
    //   }
    // );
  }

  AddResponse(){
    this._route.navigate(['menu/addresponse']);
  }

  updateResponse(element:ResponseClass){
    this._route.navigate(['menu/updateresponse',element.res_id]);
  }

  // onchange(){
  //   if (this.citem) {

  //   } else {

  //   }
  // }

  onRemove(item:ResponseClass)
  {
      if (this.getResponse==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this._removeResponseObj.deleteSelectedResponse(this.getResponse).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.getResponse.length;this.i++){
          if (this.getAllResponseDetails.find(x=>x==this.getResponse[this.i])) {
            this.getAllResponseDetails.splice(this.getAllResponseDetails.indexOf(this.getResponse[this.i]));
          }
         }
         this.dataSource.data=this.getAllResponseDetails;
        });
      }
  }

  chackChanged(item:ResponseClass){
    if (this.getResponse.find(x=>x==item)) {
      this.getResponse.splice(this.getResponse.indexOf(item),1);
    }
    else{
      this.getResponse.push(item);
    }
    console.log(this.getResponse);
  }

  deleteResponse(item:ResponseClass)
  {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
