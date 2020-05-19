import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from "./form/form.component";


const routes: Routes = [
  {
    path: '', component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
