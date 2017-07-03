import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities:IActivity[];
  totalActivities:number;
  totalDistance:number;
  firstDate:Date;
  constructor(
    private activityservice:ActivityService
          ) { }

  ngOnInit() {
    this.activities=this.activityservice.getActivities();
    this.totalActivities=this.activityservice.totalActivities(this.activities);
    this.totalDistance=this.activityservice.totalDistance(this.activities);
    this.firstDate=this.activityservice.firstDate(this.activities);
  }

}
