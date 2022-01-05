import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPredicteddepartureComponent } from './routes/component/list-predicteddeparture/list-predicteddeparture.component';
import { ListRoutesComponent } from './routes/component/list-routes/list-routes.component';
import { ListRoutespatternsComponent } from './routes/component/list-routespatterns/list-routespatterns.component';
import { ListServicesComponent } from './routes/component/list-services/list-services.component';
import { ListStopsComponent } from './routes/component/list-stops/list-stops.component';

const routes: Routes = [
  {path: 'viewRoutes',
  children: [
    {path: '', component: ListRoutesComponent},
    {path: 'viewServices/:id', component: ListServicesComponent},
    {path: 'viewStops/:id', 
    children: [
      {path: '', component: ListStopsComponent},
      {path: 'viewRoutespatterns/:id', 
      children: [
        {path: '', component: ListRoutespatternsComponent},
        {path: 'predictDeparture/:id', component: ListPredicteddepartureComponent},
      ]
    },
    ]
  },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
