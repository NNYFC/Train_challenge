import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutesComponent } from './component/list-routes/list-routes.component';
import { ListStopsComponent } from './component/list-stops/list-stops.component';

import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ListRoutespatternsComponent } from './component/list-routespatterns/list-routespatterns.component';
import { ListServicesComponent } from './component/list-services/list-services.component';
import { ListPredicteddepartureComponent } from './component/list-predicteddeparture/list-predicteddeparture.component';
import { ButtonComponent } from './component/button/button.component';


@NgModule({
  declarations: [
    ListRoutesComponent,
    ListStopsComponent,
    ListRoutespatternsComponent,
    ListServicesComponent,
    ListPredicteddepartureComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ]
})
export class RoutesModule { }
