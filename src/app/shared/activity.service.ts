import { Injectable } from '@angular/core';
import { IActivity } from './activity.model';
import { SAVED_ACTIVITIES } from './activities';

@Injectable()
export class ActivityService {

  constructor() { }
  getActivities():IActivity[]{
    return SAVED_ACTIVITIES.slice(0);
  }
  totalActivities(data:IActivity[])
  {
    return data.length;
  }
  totalDistance(data)
  {
 let totaldistance=0;
 for(let i=0;i<data.length;i++)
 {
   totaldistance=+totaldistance+data[i].distance;
 }
 return totaldistance;
  }
  firstDate(data){
    let firstdata=new Date('01/01/9999');
    for(let i=0;i>data.length;i++)
    {
      let currentDate=data[i].Date;
      if(currentDate<firstdata)
      {
        firstdata=currentDate;
      }
    }
    return firstdata;
  }
}
