import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-routespatterns',
  templateUrl: './list-routespatterns.component.html',
  styleUrls: ['./list-routespatterns.component.css']
})
export class ListRoutespatternsComponent implements OnInit {

  stopId: string = '';
  listS: any = [];
  listRoutesPatterns: Array<any> = [];

  constructor(private routeService: RouteService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.stopId = data['id'];
    })
    this.routeService.listRoutesPatterns(this.stopId).subscribe(data => {
      this.listS.data = data;
      for(let i=0; i<this.listS.data.data.length; i++){
        this.listRoutesPatterns.push(this.listS.data.data[i]);
        
      }
    });
  }

}
