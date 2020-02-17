import { Component } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	mobile: boolean = false;

	resizeObservable$: Observable<Event>
	resizeSubscription$: Subscription

	constructor() { }

	ngOnInit(): void {
		this.resizeObservable$ = fromEvent(window, 'resize')
    	this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
			this.mobile = window.screen.width < 1366;
    	})
	}
}
