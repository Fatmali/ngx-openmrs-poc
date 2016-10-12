import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { patientDashboardRouting } from './patient-dashboard-routing';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientEncountersComponent } from './patient-encounters/patient-encounters.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    patientDashboardRouting
  ],
  declarations: [
    PatientInfoComponent,
    PatientEncountersComponent,
    PatientSearchComponent
  ],
  providers: [

  ]
})
export class PatientDashboardModule { }
