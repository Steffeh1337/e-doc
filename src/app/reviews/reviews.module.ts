import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsComponent } from './reviews.component';
import { ReviewsRoutingModule } from './reviews-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ReviewsComponent],
	imports: [
		CommonModule,
		ReviewsRoutingModule,
		MatIconModule,
		HttpClientModule
	]
})
export class ReviewsModule { }
