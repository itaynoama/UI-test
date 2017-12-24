import {Component} from 'angular2/core';

@Component({
    selector: 'task-list-view',
    properties: ['model'],
    templateUrl: 'app/components/task-list-view/task-list-view.html'
})
export class TaskListView {

    model:any[];

    constructor() {
        this.model = [];
    }
}
