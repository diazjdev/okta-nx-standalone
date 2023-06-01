import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardComponent } from './feature/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
