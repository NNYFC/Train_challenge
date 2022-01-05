import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-stops',
  templateUrl: './list-stops.component.html',
  styleUrls: ['./list-stops.component.css']
})
export class ListStopsComponent implements OnInit {

  routeId: string = '';
  listS: any = [];
  listStops: Array<any> = [];

  constructor(private routeService: RouteService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.routeId = data['id'];
    })
    this.routeService.listRouteStops(this.routeId).subscribe(data => {
      this.listS.data = data;
      for(let i=0; i<this.listS.data.data.length; i++){
        this.listStops.push(this.listS.data.data[i]);
        
      }
    });
  }

}
