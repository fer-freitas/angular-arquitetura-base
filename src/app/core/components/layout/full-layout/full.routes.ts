import { Routes, RouterModule } from '@angular/router';

export const full: Routes = [
  {
    path: 'error',
    loadChildren: () => import('src/app/modules/error-pages/error-pages.module').then(m => m.ErrorPagesModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('src/app/modules/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'maintenance',
    loadChildren: () => import('src/app/modules/maintenance/maintenance.module').then(m => m.MaintenanceModule),
  }
]