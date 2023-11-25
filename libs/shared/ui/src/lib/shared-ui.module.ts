import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const compomemts = [LayoutComponent, NavComponent, FooterComponent];

@NgModule({
  imports: [RouterModule],
  exports: [...compomemts, RouterModule],
  declarations: [...compomemts, FooterComponent],
})
export class SharedUiModule {}
