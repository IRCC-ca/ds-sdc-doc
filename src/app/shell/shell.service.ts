/**
 * Provides helper function to create routes
 */

import { Route, Routes } from "@angular/router";
import { ShellComponent } from "../shell/shell.component";

export class Shell {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes
    };
  }
}