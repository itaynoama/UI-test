import {Component} from 'angular2/core';

@Component({
    selector: 'activity-list-view',
    properties: ['model'],
    templateUrl: 'app/components/activity-list-view/activity-list-view.html'
})
export class ActivityListView {

    model:any[];

    constructor() {
        this.model = [];
    }
}
