import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-predicteddeparture',
  templateUrl: './list-predicteddeparture.component.html',
  styleUrls: ['./list-predicteddeparture.component.css']
})
export class ListPredicteddepartureComponent implements OnInit {

  route_patternId: string = '';
  listP: any = [];
  listPredict: Array<any> = [];

  constructor(private routeService: RouteService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.route_patternId = data['id'];
    })
    this.routeService.listPredictedDeparture(this.route_patternId).subscribe(data => {
      this.listP.data = data;
      for(let i=0; i<this.listP.data.data.length; i++){
        this.listPredict.push(this.listP.data.data[i]);
        
      }
    });
  }

}
