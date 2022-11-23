import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {
  LocalizeRouterModule,
  LocalizeParser,
  CacheMechanism,
  LocalizeRouterSettings
} from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import {OverviewComponent} from "./pages/overview/overview.component";
import {PageButtonComponent} from "./pages/button/button.component";
import {PageTokenComponent} from "./pages/token/token.component";

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, { ...settings, alwaysSetPrefix: true }, http);
}

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'for-developers', component: OverviewComponent },
  { path: 'for-designers', component: OverviewComponent },
  { path: 'accessibility', component: OverviewComponent },
  { path: 'colours', component: OverviewComponent },
  { path: 'typography', component: OverviewComponent },
  { path: 'iconography', component: OverviewComponent },
  { path: 'layouts', component: OverviewComponent },
  { path: 'tokens', component: PageTokenComponent },
  { path: 'buttons', component: PageButtonComponent },
  { path: 'checkbox', component: OverviewComponent },
  { path: 'external-link', component: OverviewComponent },
  { path: 'footer', component: OverviewComponent },
  { path: 'header', component: OverviewComponent },
  { path: 'icon-button', component: OverviewComponent },
  { path: 'input-field', component: OverviewComponent },
  { path: 'radio-button', component: OverviewComponent },
  { path: 'tabs', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

// scrolling options set
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload'
  
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      },
      cacheMechanism: CacheMechanism.Cookie,
      cookieFormat: '{{value}};{{expires:20}};path=/',
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
