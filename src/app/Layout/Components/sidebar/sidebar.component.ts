import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeOptions } from '../../../theme-options';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
	PerfectScrollbarConfigInterface,
	PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';

import { AuthService } from '../../../auth-module/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
	public extraParameter: any;
	public showRegistratura = false;
	public showMobile = false;
	public showSettings = false;
	public showAdmin = false;

	constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute,
		private authService: AuthService,
		private router: Router
	) {

	}

	@select('config') public config$: Observable<any>;

	public config: PerfectScrollbarConfigInterface = {};
	private newInnerWidth: number;
	private innerWidth: number;
	activeId = 'dashboards';

	toggleSidebar() {
		this.globals.toggleSidebar = !this.globals.toggleSidebar;
		this.globals.sidebarHover = !this.globals.toggleSidebar;
	}

	sidebarHover() {
		this.globals.sidebarHover = !this.globals.sidebarHover;
	}

	sidebarHoverMouseOut() {
		this.globals.sidebarHover = false;
	}

	sidebarHoverMouseIn() {
		this.globals.sidebarHover = true;
	}


	ngOnInit() {
		setTimeout(() => {
			this.innerWidth = window.innerWidth;
			if (this.innerWidth < 1200) {
				this.globals.toggleSidebar = true;
			}
		});

		this.extraParameter = this.activatedRoute.snapshot.firstChild.routeConfig.path;

	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.newInnerWidth = event.target.innerWidth;

		if (this.newInnerWidth < 1200) {
			this.globals.toggleSidebar = true;
		} else {
			this.globals.toggleSidebar = false;
		}
	}

	async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/auth/login', { replaceUrl: true });
		console.log('here')
	}
}
