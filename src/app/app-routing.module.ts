import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YikesComponent } from './yikes/yikes.component';


const routes: Routes = [{path:"Yikes/:id",component:YikesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
