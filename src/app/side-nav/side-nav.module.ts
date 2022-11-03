import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavComponent} from "./side-nav.component";
import { IRCCModule } from "@ircc-ca/ds-sdc-angular";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    IRCCModule,
    RouterModule
  ],
  exports: [
    SideNavComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SideNavModule { }
