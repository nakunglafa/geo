import { Injectable } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { SAVED_ACTIVITIES } from './activities';
var apiToken=environment.MAPBOX_API_KEY;
declare var omnivore:any;
declare var L:any;

@Injectable()
export class MapService {

  constructor() { } 
  getActivity(id:number){
    return SAVED_ACTIVITIES.slice(0).find(run=>run.id==id)
  }
  plotActivity(id:number)
  {
    var mystyle={
      "Color":"#3949ab",
      "weight":5,
      "opacity":0.95
    };
  }
}
