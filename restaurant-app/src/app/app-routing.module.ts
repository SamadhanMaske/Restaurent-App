import { HomeComponent } from './home/home.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRestaurentComponent } from './login-restaurent/login-restaurent.component';
import { RegisterRestaurentComponent } from './register-restaurent/register-restaurent.component';

const routes: Routes = [
  {component:HomeComponent, path:''},
  {component:AddRestaurentComponent, path:'add'},
  {component:UpdateRestaurentComponent, path:'update/:id'},
  {component:ListRestaurentComponent, path:'list'},
  {component:RegisterRestaurentComponent, path:'register'},
  {component:LoginRestaurentComponent, path:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
