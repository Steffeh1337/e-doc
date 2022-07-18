import { TestBed } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


describe('ReviewsService', () => {
	let service: ReviewsService;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				ReviewsService
			]
		});
		service = TestBed.inject(ReviewsService);
		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
	});

	fit('should be created', () => {
		expect(service).toBeTruthy();
	});
});
