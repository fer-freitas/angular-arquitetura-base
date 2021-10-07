import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../shared/shared.module";

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    NgbModule,
    SharedModule,
    CoreModule
  ]
})
export class FaqModule { }
