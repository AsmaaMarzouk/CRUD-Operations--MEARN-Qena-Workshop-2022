import { Component, OnInit } from '@angular/core';
import { Iemployee } from 'src/app/Models/iemployee';
import { EmpApiService } from 'src/app/Services/emp-api.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  // property intial with array
  Employee:any=[];
  // Employee:Iemployee[]=[];


  constructor(public empApi:EmpApiService) { }

  ngOnInit(): void {
    this.getAllEmployeesData();
  }

  getAllEmployeesData(){
    return this.empApi.getAllEmployees().subscribe((data:{})=>{
      this.Employee=data;
      // console.log(this.Employee);
      
    })
  }

  deleteEmployee(empId:any){
   if(confirm('Are you sure you want to delete this employee?')){
    this.empApi.deleteEmp(empId).subscribe((data)=>{
      this.getAllEmployeesData();
    })
   }
  }

}
