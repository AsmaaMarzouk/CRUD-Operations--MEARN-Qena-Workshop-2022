import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpApiService } from 'src/app/Services/emp-api.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
empDetails={name:'',email:'',phone:0};
  constructor(private empApi:EmpApiService,private router:Router) { }

  ngOnInit(): void {
  }

  // addNewEmp(dataOfEmp:any){
    addNewEmp(){
    this.empApi.createEmployee(this.empDetails).subscribe((data:{})=>{

      this.router.navigate(['/list']);
    })
  }

}
