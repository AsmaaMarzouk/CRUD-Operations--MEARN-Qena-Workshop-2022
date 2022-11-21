import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpApiService } from 'src/app/Services/emp-api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  empData:any={};
  constructor(public activatedRoute: ActivatedRoute,public empApi:EmpApiService,public router:Router) { }

  ngOnInit(): void {
    this.empApi.getEmployee(this.id).subscribe(data =>{
      this.empData=data;

      // console.log(this.empData);
      
    })

    
  }
  updateEmployee(){
   if(confirm('Are you sure you want to update this employee?')){
    this.empApi.updateEmp(this.id,this.empData).subscribe(data=>{

      this.router.navigate(['/list']);
    })
   }
   else{
    this.router.navigate(['/list'])
   }
  }
}
