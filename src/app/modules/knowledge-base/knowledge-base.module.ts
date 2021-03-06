import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from "../../shared/shared.module";

import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [KnowledgeBaseComponent],
  imports: [
    CommonModule,
    KnowledgeBaseRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    CoreModule
  ]
})
export class KnowledgeBaseModule { }
