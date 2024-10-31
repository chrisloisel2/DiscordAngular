import { Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { RegisterComponent } from './Component/register/register.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'messages', component: MessagesComponent },
];
