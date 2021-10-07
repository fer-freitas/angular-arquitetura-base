import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './pages/default/default.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { UniversityComponent } from './pages/university/university.component';
import { BitcoinComponent } from './pages/bitcoin/bitcoin.component';
import { ServerComponent } from './pages/server/server.component';
import { ProjectComponent } from './pages/project/project.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    DefaultComponent, 
    ECommerceComponent, 
    UniversityComponent, 
    BitcoinComponent, 
    ServerComponent, 
    ProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    CountToModule,
    DashboardRoutingModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    SharedModule,
    NgxDatatableModule,
    CoreModule
  ]
})
export class DashboardModule { }
