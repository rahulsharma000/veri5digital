import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoplistComponent } from './_components/shoplist/shoplist.component';


const routes: Routes = [
  {path:'',component:ShoplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
