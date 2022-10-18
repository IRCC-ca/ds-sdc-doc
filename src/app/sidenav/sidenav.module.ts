import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavContainerComponent} from "./sidenav-container/sidenav-container.component";
import { SidenavSectionComponent } from './sidenav-section/sidenav-section.component';
import { SidenavTitleComponent } from './sidenav-title/sidenav-title.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';



@NgModule({
  declarations: [
    SidenavContainerComponent,
    SidenavSectionComponent,
    SidenavTitleComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavContainerComponent,
    SidenavSectionComponent,
    SidenavTitleComponent,
    SidenavItemComponent
  ]
})
export class SidenavModule { }
