import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './Components/list-employee/list-employee.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'create-emp',pathMatch: 'full'},
  {path:'create-emp',component:CreateEmployeeComponent},
  {path:'list',component:ListEmployeeComponent},
  {path:'emp-edit/:id',component:EditEmployeeComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
