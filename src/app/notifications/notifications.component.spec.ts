import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
	let component: NotificationsComponent;
	let fixture: ComponentFixture<NotificationsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NotificationsComponent],
			imports: [
				HttpClientModule
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
