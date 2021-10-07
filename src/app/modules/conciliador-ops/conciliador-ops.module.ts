import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConciliadorOpsComponent } from './pages/listar-conciliador-ops/listar-conciliador-ops.component';
import { NovoConciliadorOpsComponent } from './pages/novo-conciliador-ops/novo-conciliador-ops.component';
import { ConciliadorOpsService } from './conciliador-ops.service';
import { EditarConciliadorOpsComponent } from './pages/editar-conciliador-ops/editar-conciliador-ops.component';
import { HistoricoConciliadorOpsComponent } from './pages/historico-conciliador-ops/historico-conciliador-ops.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreModule } from 'src/app/core/core.module';
import { ConciliadorOpsRoutingModule } from './conciliador-ops-routing.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SetupComponent } from './components/setup/setup.component';
import { FileComponent } from './components/file/file.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { FileUploadModule } from 'ng2-file-upload';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ModelingComponent } from './components/modeling/modeling.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [
    ListarConciliadorOpsComponent,
    NovoConciliadorOpsComponent,
    EditarConciliadorOpsComponent,
    HistoricoConciliadorOpsComponent,
    SetupComponent,
    FileComponent,
    AdvancedComponent,
    ModelingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ConciliadorOpsRoutingModule,
    SharedModule,
    NgxDatatableModule,
    CoreModule,
    ReactiveFormsModule,
    ArchwizardModule,
    FileUploadModule,
    DropzoneModule
  ],
  providers: [
    { provide: ConciliadorOpsService },
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG }]
})
export class ConciliadorOpsModule { }
