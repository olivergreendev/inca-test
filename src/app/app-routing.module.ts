import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerDataComponent } from './computer-data/computer-data.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserDataComponent },
  { path: 'computers', component: ComputerDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
