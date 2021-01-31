import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedYoga } from '@demo/shared';
import {} from '@nativescript-community/yoga';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedYoga {}
