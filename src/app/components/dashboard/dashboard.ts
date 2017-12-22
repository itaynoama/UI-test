import {Component} from 'angular2/core';

import {Title} from '../title/title';
import {Widget} from '../widget/widget';
import {WidgetHeader} from '../widget-header/widget-header';
import {WidgetBody} from '../widget-body/widget-body';
import {WidgetFooter} from '../widget-footer/widget-footer';
import {TaskListView} from '../task-list-view/task-list-view';
import {TaskListService} from '../../services/task_list';
import {MessageListView} from '../message-list-view/message-list-view';
import {MessageListService} from '../../services/message_list';
import {ActivityListView} from '../activity-list-view/activity-list-view';
import {ActivityListService} from '../../services/activity_list';
import {PieChartView} from '../pie-chart-view/pie-chart-view';
import {LineChartView} from '../line-chart-view/line-chart-view';


@Component({
    selector: 'dashboard',
    providers: [TaskListService],
    templateUrl: 'app/components/dashboard/dashboard.html',
    styleUrls: ['app/components/dashboard/dashboard.css'],
    directives: [Title, Widget, WidgetHeader, WidgetBody,
        WidgetFooter, TaskListView, MessageListView, ActivityListView, PieChartView, LineChartView]
})

export class Dashboard {
    tasks:any[];
    messages:any[];
    activitys:any[];

    constructor(private taskListService:TaskListService, private messageListService:MessageListService, private activityListService:ActivityListService) {
        this.taskListService = taskListService;
        this.messageListService = messageListService;
        this.activityListService = activityListService;
    }

    ngOnInit() {
        this.tasks = this.taskListService.all();
        this.messages = this.messageListService.all();
        this.activitys = this.activityListService.all();
    }
}
