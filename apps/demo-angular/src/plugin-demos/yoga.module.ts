import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { YogaComponent } from './yoga.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: YogaComponent }])],
	declarations: [YogaComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class YogaModule {}
