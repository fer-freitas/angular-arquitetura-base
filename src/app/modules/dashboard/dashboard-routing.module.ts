import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinComponent } from './pages/bitcoin/bitcoin.component';
import { DefaultComponent } from './pages/default/default.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { ProjectComponent } from './pages/project/project.component';
import { UniversityComponent } from './pages/university/university.component';
import { ServerComponent } from './pages/server/server.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: "E-commerce",
          breadcrumb: "E-commerce"
        }
      },
      {
        path: 'university',
        component: UniversityComponent,
        data: {
          title: "University",
          breadcrumb: "University"
        }
      },
      {
        path: 'bitcoin',
        component: BitcoinComponent,
        data: {
          title: "Crypto",
          breadcrumb: "Crypto"
        }
      },
      {
        path: 'server',
        component: ServerComponent,
        data: {
          title: "Server",
          breadcrumb: "Server"
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
