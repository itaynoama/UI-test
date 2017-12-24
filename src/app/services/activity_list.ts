import {Injectable} from "angular2/core";

@Injectable()
export class ActivityListService {
    activitys:any[] = [
        {img: 'https://www.thyssenkrupp.com/brand/assets/img/12-interview-portrait-circle.png', name: 'Nina Jones', time: 'Just now', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'added a new project', part: 'free ui kit', select: 'vl'},
        {img: 'https://capitalfoodfight.org/wp-content/uploads/2014/07/Doug-headshot-circle-web.png', name: 'James Smith', time: '40 minutes ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'commented project', part: 'free psd template', select: 'vl'},
        {img: 'http://www.boycecollege.com/wp-content/uploads/2017/10/Denny-Burk-Circle.png', name: 'Alex Cloonye', time: '1 hour ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'completed task', part: 'symu website', select: 'vl'},
        {img: 'https://www.howweelearn.com/wp-content/uploads/2017/02/sarah-profile-circle.png', name: 'Alexandra Spears', time: '3 hours ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'added a new project', part: 'free PSD (..)'}
    ];

    add(value:any):void {
        this.activitys.push(value);
    }

    all():any[] {
        return this.activitys;
    }
}
