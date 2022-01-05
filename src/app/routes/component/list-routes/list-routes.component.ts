import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {

  listR: any = [];
  listRoutes: Array<any> = [];

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.listRoutes().subscribe(data => {
      this.listR.data = data;
      for(let i=0; i<this.listR.data.data.length; i++){
        this.listRoutes.push(this.listR.data.data[i]);
        
      }
    });
  }


}

