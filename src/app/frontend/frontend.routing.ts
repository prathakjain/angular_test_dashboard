import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ 
		path: "",
		component: FrontendComponent,
		children :[
			{ path: '', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'about', component: AboutComponent },
			//{ path: '**', component: HomeComponent }
		]
	}
];

export const FrontendRouting = RouterModule.forRoot(routes);