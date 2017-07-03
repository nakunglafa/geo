import { Component,OnInit } from '@angular/core';
import { ActivityListComponent } from './activity-list/activity-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
  }
}
