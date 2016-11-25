import { NgModule } from '@angular/core';

import { BusyModule, BusyConfig } from 'angular2-busy';
import { LaddaModule } from 'angular2-ladda';
import { CommonModule } from '@angular/common';
import { DisplayErrorComponent } from './display-error/display-error.component';
import { DataTablesComponent } from './components/datatables.component';
import { StringToDatePipe } from './pipes/string-to-date.pipe';
import { OpenmrsApi } from '../openmrs-api/openmrs-api.module';
@NgModule({
    imports: [
        BusyModule.forRoot(
            new BusyConfig({
                message: 'Please Wait...',
                backdrop: true,
                delay: 200,
                minDuration: 600,
                wrapperClass: 'my-class',

            })
        ),
        LaddaModule.forRoot({
            style: 'expand-right',
            spinnerSize: 20,
            spinnerColor: 'white',
            spinnerLines: 12
        }),
        CommonModule,
        OpenmrsApi
    ],
    exports: [BusyModule, LaddaModule, DisplayErrorComponent,
        DataTablesComponent, StringToDatePipe],
    declarations: [
        DisplayErrorComponent, DataTablesComponent, StringToDatePipe
    ],
    providers: [],
})
export class NgamrsSharedModule { }
