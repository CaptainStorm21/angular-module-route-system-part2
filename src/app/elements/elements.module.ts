import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';


@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    ElementsHomeComponent
  ]
})
export class ElementsModule { }

/*
line 14 to 16. we are telling inner component ElementsHomeComponent
that it is allowed to be imported to the outside world
*/
