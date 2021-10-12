import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegularComponent } from './regular.component';
import { RegularRoutingModule } from './regular-routing.module';

@NgModule({
  imports: [
    CommonModule, NgbModule,
    RegularRoutingModule,
  ],
  declarations: [RegularComponent],
  exports: [RegularComponent]
})
export class RegularModule { }
