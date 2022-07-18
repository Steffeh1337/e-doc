// import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { RouterTestingModule } from "@angular/router/testing";

describe('LoginGuard', () => {
	let guard: LoginGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				RouterTestingModule
			]
		});
		guard = TestBed.inject(LoginGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
