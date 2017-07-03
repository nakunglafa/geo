import{ IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[]=[
    {
        "id":1,
        "name":"main bike trails",
        "date":new Date('06/06/2017'),
        "distance":5.2,
        "comments":"have a nice day",
        "gpxData":"../../assets/gpx/1.gpx"
    },
    {
        "id":2,
        "name":"trekking",
        "date":new Date('06/06/2017'),
        "distance":4.2,
        "comments":"have a nice day",
        "gpxData":"../../assets/gpx/2.gpx"
    }
]