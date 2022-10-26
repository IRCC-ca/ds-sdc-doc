import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavContainerComponent} from "./side-nav-container.component";
import {SideNavComponent} from "./side-nav.component";
import { IRCCModule } from "@ircc-ca/ds-sdc-angular";


@NgModule({
  declarations: [
    SideNavComponent,
    SideNavContainerComponent
  ],
  imports: [
    CommonModule,
    IRCCModule
  ],
  exports: [
    SideNavComponent,
    SideNavContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SideNavModule { }
