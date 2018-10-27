import { Component, OnInit, ViewChild } from '@angular/core';
import { Adminclass } from '../../classes/adminclass';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AdminserviceService } from '../../services/adminservice.service';
import { RemoverecService } from '../../services/removerec.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  recruiterdetails:Adminclass[]=[];
  i:number;
  newrecruiterdetails:Adminclass[]=[];
  dataSource = new MatTableDataSource(this.recruiterdetails);
  displayedColumns: string[] = ['checkItem','recphoto','company_name','company_web','company_type','update'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private admin:AdminserviceService,private removerec:RemoverecService,private _route:Router) { }

  ngOnInit() {
    this.admin.getAllAdmin().subscribe(
      (data:Adminclass[])=>{
        this.recruiterdetails=data;
        console.log(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.data=data;

      }
    );
  }



  removeRecruiter()
  {

      if (this.newrecruiterdetails==null) {
          alert("You need to select Items first Then only proceed furter");
      } else {
        this.removerec.removeRec(this.newrecruiterdetails).subscribe(
          (x:any)=>{
          for(this.i=0;this.i<this.newrecruiterdetails.length;this.i++){
          if (this.recruiterdetails.find(x=>x==this.newrecruiterdetails[this.i])) {
            this.recruiterdetails.splice(this.recruiterdetails.indexOf(this.newrecruiterdetails[this.i]));
          }
         }
          this.dataSource.data=this.recruiterdetails;
        });
      }
      // this.ngOnInit();

  }


  chackChanged(item:Adminclass){
    if (this.newrecruiterdetails.find(x=>x==item)) {
      this.newrecruiterdetails.splice(this.newrecruiterdetails.indexOf(item),1);
    }
    else{
      this.newrecruiterdetails.push(item);
    }
    console.log(this.newrecruiterdetails);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addrec()
  {
    this._route.navigate(['/addrec']);
  }

  updateRec(element:Adminclass)
  {
    this._route.navigate(['/updaterec',element.rec_id]);
  }
}
