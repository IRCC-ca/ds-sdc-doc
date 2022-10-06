import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IRCCModule } from '@ircc-ca/ds-sdc-angular';
import { JLButtonModule } from '@ircc-ca/ds-sdc-angular/button';
import { JLCheckboxModule } from '@ircc-ca/ds-sdc-angular/checkbox';
import { JLFooterModule } from '@ircc-ca/ds-sdc-angular/footer';
import { JLHeaderModule } from '@ircc-ca/ds-sdc-angular/header';
import { JLIconModule } from '@ircc-ca/ds-sdc-angular/icon';
import { JLLinkModule } from '@ircc-ca/ds-sdc-angular/link';
import { JLRadiobuttonModule } from '@ircc-ca/ds-sdc-angular/radio-button';
import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from './app.component';

const JL_ANGULAR_COMPONENTS = [
  JLButtonModule,
  JLIconModule,
  JLLinkModule,
  JLRadiobuttonModule,
  JLCheckboxModule,
  JLFooterModule,
  JLHeaderModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IRCCModule,
    JL_ANGULAR_COMPONENTS,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

// enable default sanitization
MarkdownModule.forRoot()
