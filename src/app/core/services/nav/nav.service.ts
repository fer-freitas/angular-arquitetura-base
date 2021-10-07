import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from './menu';


@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
	public fullScreen = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Dashboard', icon: 'home', type: 'sub', badgeType: 'primary', badgeValue: 'new', active: false, children: [
				{ path: '/dashboard/default', title: 'Default', type: 'link' },
				{ path: '/dashboard/e-commerce', title: 'E-Commerce', type: 'link', },
				{ path: '/dashboard/university', title: 'University', type: 'link' },
				{ path: '/dashboard/bitcoin', title: 'Crypto', type: 'link' },
				{ path: '/dashboard/server', title: 'Server', type: 'link' },
				{ path: '/dashboard/project', title: 'Project', type: 'link' }
			]
		},
		{
			path: '/conci-ops', title: 'Conci-ops', icon: 'check-square', type: 'link'
		},
		{
			path: '/quebra-sigilo', title: 'Quebra Sigilo', icon: 'unlock', type: 'link'
		},
		{
			path: '/faq', title: 'FAQ', icon: 'help-circle', type: 'link', bookmark: true
		},
		{
			path: '/knowledge-base', title: 'Knowledge Base', icon: 'database', type: 'link', bookmark: true
		},
		// {
		// 	title: 'Error Page', icon: 'alert-octagon', type: 'sub', active: false, children: [
		// 		{ path: 'error/400', title: 'Error 400', type: 'extTabLink' },
		// 		{ path: 'error/401', title: 'Error 401', type: 'extTabLink' },
		// 		{ path: 'error/403', title: 'Error 403', type: 'extTabLink' },
		// 		{ path: 'error/404', title: 'Error 404', type: 'extTabLink' },
		// 		{ path: 'error/500', title: 'Error 500', type: 'extTabLink' },
		// 		{ path: 'error/503', title: 'Error 503', type: 'extTabLink' }
		// 	]
		// },
		// {
		// 	title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
		// 		{ path: 'authentication/login', title: 'Login', type: 'extTabLink' },
		// 		{ path: 'authentication/register', title: 'Register', type: 'extTabLink' },
		// 		{ path: 'authentication/unlockuser', title: 'Unlock User', type: 'extTabLink' },
		// 		{ path: 'authentication/forgetpassword', title: 'Forget Password', type: 'extTabLink' },
		// 		{ path: 'authentication/resetpassword', title: 'Reset Password', type: 'extTabLink' }
		// 	]
		// },
		// {
		// 	path: '/coming-soon', title: 'Coming Soon', icon: 'briefcase', type: 'link' 
		// },
		// {
		// 	path: '/maintenance', title: 'Maintenance', icon: 'settings', type: 'link'
		// }
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
