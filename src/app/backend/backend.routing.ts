import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendComponent } from './backend.component'; 
import { LoginComponent } from './onboard/login/login.component';
import { RegistrationComponent } from './onboard/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WithoutSidebarComponent } from './layout/without-sidebar/without-sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostaddComponent } from './pages/posts/postadd/postadd.component';
import { PostlistComponent } from './pages/posts/postlist/postlist.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{ path: "login" , component: WithoutSidebarComponent,
		children: [
			{ path: '', component: LoginComponent }
	  	]
	},
	{ path: "register", component: WithoutSidebarComponent,
		children: [
			{ path: '', component: RegistrationComponent }
	  	]
	},
	// { path: "forgot", component: WithoutSidebarComponent,
	// 	children: [
	// 		{ path: '', component: ForgotpasswordComponent }
	// 	]
	// },
	// {
	// 	path: "admin",
	// 	component: BackendComponent,
	// 	children :[
	// 		{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
	// 		{ path: 'dashboard', component: ProfileComponent, canActivate: [AuthGuard] },
	// 		{ path: 'posts', component: PostlistComponent, canActivate: [AuthGuard]  },
	// 		{ path: 'posts/add', component: PostaddComponent, canActivate: [AuthGuard] }
	// 	]
	// }
	{
		path: "admin",
		component: BackendComponent,
		children :[
			{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
			{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
			{ path: 'posts', component: PostlistComponent, canActivate: [AuthGuard]  },
			{ path: 'posts/add', component: PostaddComponent, canActivate: [AuthGuard] }
		]
	}
];

export const BackendRouting = RouterModule.forRoot(routes);