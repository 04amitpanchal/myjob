import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AdminserviceService } from '../../../services/adminservice.service';
import { emp } from '../../../classes/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEmpByIdService } from '../../../services/get-emp-by-id.service';
import { UpdateEmpDetailsService } from 'src/app/services/update-emp-details.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
 country_list:string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
 state_list:string[]=[ 'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
 'Goa',
 'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
 'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
 'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Lakshadweep',
 'National Capital Territory of Delhi',
'Puducherry'];
city_list:string[]=[
    'Ahmedabad',
     'Ahwa',
   'Amod',
   'Amreli',
   'Anand',
   'Anjar'
 ];
;
department_list:string[]=["it","management"];
selected_country="option1";
selected_state="option1";
selected_city="option1";
selected_department="option1";
selectedFile:File=null;
emp_id:string;
id:string;
emp_password:string;
first_name:string;
last_name:string;
emp_photo:string;
country_model_value:string;
state_model_value:string;
city_model_value:string;
department_model_value:string;
  constructor(private _route:Router,private _getEmp:GetEmpByIdService,private _aroute:ActivatedRoute,private updateEmpDetailsObj:UpdateEmpDetailsService) { }

  ngOnInit() {
    this.id=this._aroute.snapshot.params['id'];
    this._getEmp.getEmpDetailsById(this.id).subscribe(
      (data:any)=>{
        this.emp_id=data[0].emp_id;
        this.emp_password=data[0].emp_password;
        this.first_name=data[0].first_name;
        this.last_name=data[0].last_name;
        // this.country_list.values=data[0].country;
      }
    );
  }

  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }


  updateEmpDetails()
  {
    if(this.emp_photo==null){
      alert('choose image first');
    }
    else{
    const fd=new FormData();
    this.id=this._aroute.snapshot.params['id'];
    alert(this.id);
    fd.append('emp_id',this.id.toString());
    fd.append('emp_password',this.emp_password);
    fd.append('first_name',this.first_name);
    fd.append('last_name',this.last_name);
    fd.append('country',this.country_model_value);
    fd.append('state',this.state_model_value);
    fd.append('city',this.city_model_value);
    fd.append('emp_field',this.department_model_value);
    fd.append('image',this.selectedFile,this.selectedFile.name);

    this.updateEmpDetailsObj.updateEmpDetails(fd).subscribe(
      (data:any)=>{
              console.log(data);
              alert("details updaated sucessfully");
      }
    );
    this._route.navigate(['menu/employee']);
  }
  }

  backPage()
  {
      this._route.navigate(['menu/employee']);
  }

}
