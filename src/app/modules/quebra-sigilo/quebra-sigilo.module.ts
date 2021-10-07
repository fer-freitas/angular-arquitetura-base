import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarQuebraSigiloComponent } from './pages/listar-quebra-sigilo/listar-quebra-sigilo.component';
import { QuebraSigiloService } from './services/quebra-sigilo.service';
import { RouterModule } from '@angular/router';
import { QUEBRA_SIGILO_ROUTES } from './quebra-sigilo.routes';
import { NovoQuebraSigiloComponent } from './pages/novo-quebra-sigilo/novo-quebra-sigilo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [
    ListarQuebraSigiloComponent,
    NovoQuebraSigiloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    // QuebraSigiloRoutingModule,
    RouterModule.forChild(QUEBRA_SIGILO_ROUTES),
    SharedModule,
    NgxDatatableModule,
    CoreModule,
    ReactiveFormsModule,
    DropzoneModule
  ],
  providers: [
    { provide: QuebraSigiloService },
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG }],
})
export class QuebraSigiloModule { }