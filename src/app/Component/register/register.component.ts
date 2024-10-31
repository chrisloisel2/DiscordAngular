import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {

	constructor(public auth: AuthService) { }

	register() {
		console.log(this.registerForm.value);
		let { name, password, email } = this.registerForm.value;
		this.auth.register(name, password, email).subscribe((data) => {
			console.log(data);
		});
	}

	// Formulaire d'inscription
	registerForm = new FormGroup({
		name: new FormControl(''),
		password: new FormControl(''),
		email: new FormControl('')
	});

}
