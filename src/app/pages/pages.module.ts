import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
