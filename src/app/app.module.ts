import {CUSTOM_ELEMENTS_SCHEMA, NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {JLButtonModule} from '@ircc-ca/ds-sdc-angular/button';
import {JLCheckboxModule} from '@ircc-ca/ds-sdc-angular/checkbox';
import {JLFooterModule} from '@ircc-ca/ds-sdc-angular/footer';
import {JLHeaderModule} from '@ircc-ca/ds-sdc-angular/header';
import {JLIconModule} from '@ircc-ca/ds-sdc-angular/icon';
import {JLLinkModule} from '@ircc-ca/ds-sdc-angular/link';
import {JLRadiobuttonModule} from '@ircc-ca/ds-sdc-angular/radio-button';
import {MarkdownModule, MarkedOptions} from "ngx-markdown";
import {AppComponent} from './app.component';
import {SideNavModule} from "./side-nav/side-nav.module";
import {AppRoutingModule} from './app-routing.module';
import {OverviewComponent} from './pages/overview/overview.component';
import {PageButtonComponent} from './pages/button/button.component';
import {PageUtilitiesComponent} from './pages/utilities/utilities.component';
import {SideNavConfig} from './side-nav/side-nav.config';
import {TitleSlugUrlComponent} from './title-slug-url/title-slug-url.component';
import {SlugifyPipe} from './share/pipe-slugify.pipe';
import {ClipboardModule} from "@angular/cdk/clipboard";
import {InfoTextSmallComponent} from './info-text-small/info-text-small.component';
import {ComponentPreviewComponent} from './component-preview/component-preview.component';
import {SafeHtmlPipe} from './share/safe-html.pipe';
import {PageForDevelopersComponent} from './pages/for-developers/for-developers.component';
import { ForDesignersComponent } from './pages/for-designers/for-designers.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

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
    OverviewComponent,
    TitleSlugUrlComponent,
    SlugifyPipe,
    PageButtonComponent,
    InfoTextSmallComponent,
    ComponentPreviewComponent,
    PageUtilitiesComponent,
    SafeHtmlPipe,
    ForDesignersComponent,
    PageForDevelopersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JL_ANGULAR_COMPONENTS,
    SideNavModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      // Disable html sanitize to allow generating id
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          headerIds: true
        }
      }
    }),
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [SideNavConfig],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
