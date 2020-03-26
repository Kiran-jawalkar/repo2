import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayGridComponent } from './components/display-grid/display-grid.component'
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';



const routes: Routes = [
  {path:'DisplayGridComponent',component:DisplayGridComponent},
  {path:'',component:DisplayGridComponent},
  {path : 'addEditUser',component:AddEditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
