import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavComponent} from "./side-nav.component";
import { RouterModule } from '@angular/router';
import {JLIconModule} from "@ircc-ca/ds-sdc-angular/icon";
import { UrlPipe } from '../share/url.pipe';


@NgModule({
  declarations: [
    SideNavComponent,
    UrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    JLIconModule
  ],
  exports: [
    SideNavComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SideNavModule { }
