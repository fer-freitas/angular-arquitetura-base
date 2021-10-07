import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { content } from "./core/components/layout/content-layout/content-routes";
import { full } from './core/components/layout/full-layout/full.routes';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { ContentLayoutComponent } from './core/components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './core/components/layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [NoAuthGuard],
    children: full
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard],
    children: content
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
