// declare const $: any;
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
// https://angular.io/guide/rx-library pour les intervals

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	date:any = new Date("Mar 20, 2020 12:00:00");
	days: number;
	hours: number;
	minutes: number;
	seconds: number;

	constructor() { }

	ngOnInit(): void {
		setInterval(function () {}, 1000);
	}
	ngAfterViewInit(): void {

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
