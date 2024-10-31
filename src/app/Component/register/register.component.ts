import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {

	register() {
		console.log(this.registerForm.value);
	}

	// Formulaire d'inscription
	registerForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
		email: new FormControl('')
	});

}
