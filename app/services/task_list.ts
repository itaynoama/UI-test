import {Injectable} from "angular2/core";

@Injectable()
export class TaskListService {
    tasks:any[] = [
        {name: 'New website for Symo.co', time: '5 days delays', tooltipcls: 'delays', icon: 'glyphicon-option-vertical', step: 'N'},
        {name: 'Free business PSD Template', time: '2 days delays', tooltipcls: 'delays', icon: 'glyphicon-option-vertical', step: 'F'},
        {name: 'New logo for JCD.pl', time: '5 days delays', tooltipcls: 'dayLeft', icon: 'glyphicon-option-vertical', step: 'N'},
        {name: 'Free Icons set vol.3', time: '10 days delays', tooltipcls: 'dayLeft', icon: 'glyphicon-option-vertical', step: 'F'}
    ];

    add(value:any):void {
        this.tasks.push(value);
    }

    all():any[] {
        return this.tasks;
    }
}
