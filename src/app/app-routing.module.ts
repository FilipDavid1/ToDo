import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { HomeComponent } from './components/home/home.component';
import { ToDoListDetailComponent } from './components/to-do-list-detail/to-do-list-detail.component';
import { ToDoListFormComponent } from './components/to-do-list-form/to-do-list-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'to-do-list-form', component: ToDoListFormComponent},
  {path: 'edit-task/:id', component: EditTaskComponent},
  {path: 'to-do-detail/:id', component: ToDoListDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
