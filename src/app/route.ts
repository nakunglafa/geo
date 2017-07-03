import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { MapComponent } from "./map/map.component";

export const appRoute:Routes=[
    {
        path:"runs",component:ActivityListComponent
    }
    ,{
        path:"run/:id",
        component:MapComponent    
    },
    {
        path:"",
        redirectTo:"runs",
        pathMatch:"full"
    }
]