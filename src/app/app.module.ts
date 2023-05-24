import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellFeatureModule } from 'shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellFeatureModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
