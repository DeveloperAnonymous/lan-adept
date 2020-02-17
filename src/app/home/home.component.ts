// declare const $: any;
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { fromEvent, Observable, Subscription } from "rxjs";
const ticker = interval(1000);

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	date:any = new Date("Mar 20, 2020 12:00:00");
	days: number = this.getDays();
	hours: number = this.getHours();
	minutes: number = this.getMinutes();
	seconds: number = this.getSeconds();

	mobile: boolean;

	resizeObservable$: Observable<Event>
	resizeSubscription$: Subscription

	constructor() { }

	ngOnInit(): void {
		this.mobile = window.innerWidth < 1366;
		this.resizeObservable$ = fromEvent(window, 'resize')
    	this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
			this.mobile = window.innerWidth < 1366;
    	})
	}
	
	ngAfterViewInit(): void {
		ticker.subscribe(_ => {
			this.days = this.getDays();
			this.hours = this.getHours();
			this.minutes = this.getMinutes();
			this.seconds = this.getSeconds();
		});
	}

	getDate() {
		return this.date.toLocaleDateString("fr-fr", { hour: "2-digit", minute: "2-digit" })
	}
	getDays() {
		let now = new Date().getTime();
		let distance = this.date - now;
		return Math.floor(distance % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
	}
	getHours() {
		let now = new Date().getTime();
		let distance = this.date - now;
		return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	}
	getMinutes() {
		let now = new Date().getTime();
		let distance = this.date - now;
		return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	}
	getSeconds() {
		let now = new Date().getTime();
		let distance = this.date - now;
		return Math.floor((distance % (1000 * 60)) / 1000);
	}
}
