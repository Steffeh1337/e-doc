import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppointmentsService } from './appointments.service';

describe('AppointmentsService', () => {
	let service: AppointmentsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				// HttpClientTestingModule,
				HttpClientModule
			]
		});
		service = TestBed.inject(AppointmentsService);
	});

	fit('should be created', () => {
		expect(service).toBeTruthy();
	});
});
