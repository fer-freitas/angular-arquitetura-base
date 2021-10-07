import { Routes } from '@angular/router';
import { ListarQuebraSigiloComponent } from './pages/listar-quebra-sigilo/listar-quebra-sigilo.component';
import { NovoQuebraSigiloComponent } from './pages/novo-quebra-sigilo/novo-quebra-sigilo.component';


export const QUEBRA_SIGILO_ROUTES: Routes = [
    {
      path: '',
      component: ListarQuebraSigiloComponent
    },
    {
        path:'novo',
        component: NovoQuebraSigiloComponent
    }
  ];