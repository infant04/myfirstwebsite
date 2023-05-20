import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { FooddtailComponent } from './Component/fooddtail/fooddtail.component';
import { OrderComponent } from './Component/order/order.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"fooddetail/:id",component:FooddtailComponent},
  {path:"search/:searchterm",component:HomeComponent},
  {path:"tag/:tagterm",component:HomeComponent},
  {path:"order",component:OrderComponent},
  {path:"profile",component:ProfileComponent},
  {path:"cart",component:CartComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"dashbord",component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
