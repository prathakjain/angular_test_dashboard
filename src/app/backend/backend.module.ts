import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackendComponent } from './backend.component'; 
import { BackendRouting } from './backend.routing';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LoginComponent } from './onboard/login/login.component';
import { WithoutSidebarComponent } from './layout/without-sidebar/without-sidebar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './onboard/registration/registration.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostlistComponent } from './pages/posts/postlist/postlist.component';
import { PostaddComponent } from './pages/posts/postadd/postadd.component';
 
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    BackendComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WithoutSidebarComponent,
    SidebarComponent,
    DashboardComponent,
    RegistrationComponent,
    ProfileComponent,
    PostlistComponent,
    PostaddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackendRouting,
    AgGridModule.withComponents([])
  ],
  providers: []
})

export class BackendModule {

}
