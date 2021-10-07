import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarConciliadorOpsComponent } from './pages/editar-conciliador-ops/editar-conciliador-ops.component';
import { HistoricoConciliadorOpsComponent } from './pages/historico-conciliador-ops/historico-conciliador-ops.component';
import { ListarConciliadorOpsComponent } from './pages/listar-conciliador-ops/listar-conciliador-ops.component';
import { NovoConciliadorOpsComponent } from './pages/novo-conciliador-ops/novo-conciliador-ops.component';

export const routes: Routes = [
  {
    path: '',
    component: ListarConciliadorOpsComponent,
    data: {
      title: "Conciliadores",
      breadcrumb: "Conciliadores"
    }
  },
  {
    path: 'novo',
    component: NovoConciliadorOpsComponent,
    data: {
      title: "Conciliador",
      breadcrumb: "Novo"
    }
  },
  {
    path: 'editar/:id',
    component: EditarConciliadorOpsComponent,
    data: {
      title: "Conciliador",
      breadcrumb: "Editar"
    }
  },
  {
    path: 'editar',
    component: EditarConciliadorOpsComponent,
    data: {
      title: "Conciliador",
      breadcrumb: "Editar"
    }
  },
  {
    path: 'historico',
    component: HistoricoConciliadorOpsComponent,
    data: {
      title: "Histórico",
      breadcrumb: "Histórico"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliadorOpsRoutingModule { }