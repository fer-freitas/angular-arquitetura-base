import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
