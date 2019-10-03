import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: "", component: FrontendComponent },
	{ path: "admin", component: BackendComponent },
	{ path: "**", component: PagenotfoundComponent}
	// { path: "**", redirectTo: '/frontend'}
];

export const routing = RouterModule.forRoot(routes);