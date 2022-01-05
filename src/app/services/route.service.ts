import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

 baseUrl: string = 'https://api-v3.mbta.com/';

  constructor(private http: HttpClient) { }
  
  listRoutes(){
    return this.http.get(this.baseUrl + 'routes?type=0,1');
   
  }

  listRouteServices(id: String){
    return this.http.get(this.baseUrl + 'services?filter[route]='+id);
  }

  listRouteStops(id: String){
    return this.http.get(this.baseUrl + 'stops?filter[route]='+id);
    //return this.http.get(this.baseUrl + 'stops?filter[service]=BUS122-hbc12ns1-Wdy-02;filter[route]=Red');
  }
  
  listRoutesPatterns(id: String){
    return this.http.get(this.baseUrl + 'route_patterns?filter[stop]='+id);
  }

  listPredictedDeparture(id: String){
    return this.http.get(this.baseUrl + 'predictions?filter[route_pattern]='+id);
    //return this.http.get(this.baseUrl + 'predictions?filter[stop]=place-forhl');
  }

}
