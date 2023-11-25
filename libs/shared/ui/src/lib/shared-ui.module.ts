import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

const compomemts = [LayoutComponent];

@NgModule({
  imports: [],
  exports: [...compomemts],
  declarations: [...compomemts],
})
export class SharedUiModule {}
