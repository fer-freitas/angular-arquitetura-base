import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: "Dashboard"
    }
  },
  {
    path: 'conci-ops',
    loadChildren: () => import('src/app/modules/conciliador-ops/conciliador-ops.module').then(m => m.ConciliadorOpsModule),
    data: {
      breadcrumb: "Conci-ops"
    }
  },
  {
    path: 'quebra-sigilo',
    loadChildren: () => import('src/app/modules/quebra-sigilo/quebra-sigilo.module').then(m => m.QuebraSigiloModule),
    data: {
      breadcrumb: "Quebra Sigilo"
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('src/app/modules/faq/faq.module').then(m => m.FaqModule),
    data: {
      breadcrumb: "Faq"
    }
  },
  {
    path: 'knowledge-base',
    loadChildren: () => import('src/app/modules/knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule),
    data: {
      breadcrumb: "Knowledge Base"
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];