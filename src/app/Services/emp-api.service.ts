import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iemployee } from '../Models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmpApiService {

  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  // Inject
  constructor(private httpclient:HttpClient) { }

  // employees list
  // get all employees
  // getEmployees():Observable<Iemployee[]> {
  //   return this.httpclient.get<Iemployee[]>(environment.apiURL+'/employees').pipe(retry(2),catchError(this.handleError))
  // }

  getAllEmployees():Observable<Iemployee> {
    return this.httpclient.get<Iemployee>(environment.apiURL+'/employees').pipe(retry(2),catchError(this.handleError))

  }

  // get employee by id
  getEmployee(empID:any):Observable<Iemployee> {
    return this.httpclient.get<Iemployee>(environment.apiURL+'/employees/'+empID).pipe(retry(2),catchError(this.handleError));
  }


  // create employee
  createEmployee(emp:any):Observable<Iemployee> {
    return this.httpclient.post<Iemployee>(environment.apiURL+'/employees',JSON.stringify(emp),this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
  // update employee
  updateEmp(id:any,employee:any):Observable<Iemployee> {
    return this.httpclient.put<Iemployee>(environment.apiURL+'/employees/'+id,JSON.stringify(employee),this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  // delete employee
  deleteEmp(empID:any):Observable<Iemployee>{
    return this.httpclient.delete<Iemployee>(environment.apiURL+'/employees/'+empID,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
  // Error handling
  handleError(error:any){
    let errorMsg='';
    // Get client-side error
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message;
    }
    // Get server-side error
    else{
      errorMsg =`Error code:  ${error.status} \n Message: ${error.message}`;
    }
    window.alert(errorMsg);
    return throwError(()=>{
      return errorMsg;
    })
  }
}
