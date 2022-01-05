import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  routeId: string = '';
  listS: any = [];
  listServices: Array<any> = [];

  constructor(private routeService: RouteService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.routeId = data['id'];
    })
    this.routeService.listRouteServices(this.routeId).subscribe(data => {
      this.listS.data = data;
      for(let i=0; i<this.listS.data.data.length; i++){
        this.listServices.push(this.listS.data.data[i]);
        
      }
    });
  }

}
