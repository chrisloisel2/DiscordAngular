import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(public http: HttpClient) { }


	register(name: any, password: any, email: any) {
		return this.http.post('http://localhost:3000/api/register', { name, password, email });
	}
}
