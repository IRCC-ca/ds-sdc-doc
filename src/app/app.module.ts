import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import { SideNavModule } from "./side-nav/side-nav.module";

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
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IRCCModule,
    JL_ANGULAR_COMPONENTS,
    SideNavModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

// enable default sanitization
MarkdownModule.forRoot()
