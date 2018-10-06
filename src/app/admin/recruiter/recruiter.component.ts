import { Component, OnInit, ViewChild } from '@angular/core';
import { Adminclass } from '../../classes/adminclass';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AdminserviceService } from '../../services/adminservice.service';
import { RemoverecService } from '../../services/removerec.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  recruiterdetails:Adminclass[]=[];
  i:number;
  rec1:Adminclass[]=[];
  dataSource = new MatTableDataSource(this.recruiterdetails);
  displayedColumns: string[] = ['checkItem','recphoto','company_name','company_web','company_type'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private admin:AdminserviceService,private removerec:RemoverecService) { }

  ngOnInit() {
    this.admin.getAllAdmin().subscribe(
      (data:Adminclass[])=>{
        this.dataSource.paginator = this.paginator;
        console.log(data);
        this.recruiterdetails=data;
        this.dataSource.data=data;
      }
    );
  }

  onRemove(item:Adminclass)
  {

      if (this.rec1==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.removerec.removeRec(this.rec1).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.rec1.length;this.i++){
          if (this.recruiterdetails.find(x=>x==this.rec1[this.i])) {
            this.recruiterdetails.splice(this.recruiterdetails.indexOf(this.rec1[this.i]));
          }
         }
         this.dataSource.data=this.recruiterdetails;
        });
      }


  }

  chackChanged(item:Adminclass){
    if (this.rec1.find(x=>x==item)) {
      this.rec1.splice(this.rec1.indexOf(item),1);
    }
    else{
      this.rec1.push(item);
    }
    console.log(this.rec1);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
