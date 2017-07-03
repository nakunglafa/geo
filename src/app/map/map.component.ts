import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IActivity } from "../shared/activity.model";
import { ActivatedRoute } from "@angular/router";
import { MapService } from "../shared/map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private mapservice:MapService,
    private activatedroute:ActivatedRoute
  ) { }
activity:any;
activityName:string;
activityComments:string;
activityDate:Date;
activityDistance:number;
gpx:any;
  ngOnInit() {
    this.activity=this.mapservice.getActivity(
      +this.activatedroute.snapshot.params['id']
    )
  }

}
