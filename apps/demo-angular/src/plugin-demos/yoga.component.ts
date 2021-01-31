import { Component, NgZone } from '@angular/core';
import { DemoSharedYoga } from '@demo/shared';
import {} from '@nativescript-community/yoga';

@Component({
	selector: 'demo-yoga',
	templateUrl: 'yoga.component.html',
})
export class YogaComponent {
	demoShared: DemoSharedYoga;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedYoga();
	}
}
