import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { FrontendRouting } from './frontend.routing';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FrontendRouting
  ],
  providers: []
})

export class FrontendModule {

}
