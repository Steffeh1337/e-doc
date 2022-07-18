import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
	let service: NotificationsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				// HttpClientTestingModule,
				HttpClientModule
			]
		});
		service = TestBed.inject(NotificationsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
