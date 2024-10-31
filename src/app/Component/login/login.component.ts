import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	// Creer un formulaire de connexion

	// formulaire de connexion
	// formGroupe opbject qui contient les controles du formulaire
	loginForm = new FormGroup({
		// FormControls sont les champs du formulaire
		username: new FormControl(''),
		password: new FormControl('')
	});

	// Appeler dans l'html
	//<form[formGroup]="loginForm"(ngSubmit) = "login()" >
	//	<input type="text" formControlName="username" />


	constructor() {
		// Initialiser le formulaire de connexion
	}

	// Fonction de connexion
	login() {
		// Envoyer les informations de connexion au serveur
		console.log(this.loginForm.value);
	}
}
