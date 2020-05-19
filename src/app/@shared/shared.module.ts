import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbActiveModal, NgbButtonsModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


const COMPONENTS = [];
const PIPES = [];
const ANGULAR_MODULES = [
  FormsModule,
  NgbButtonsModule,
  NgbModalModule,
  ];

@NgModule({
  imports: [CommonModule, ...ANGULAR_MODULES,],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NgbActiveModal],
    } as ModuleWithProviders;
  }
}
