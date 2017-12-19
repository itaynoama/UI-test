import {Component} from 'angular2/core';

import {Title} from '../title/title';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';

import {UserListView} from '../user-list-view/user-list-view';
import {UserListService} from '../../services/user_list';

import {ActivityListView} from '../activity-list-view/activity-list-view';
import {ActivityListService} from '../../services/activity_list';

import {PieChartView} from '../pie-chart-view/pie-chart-view';


@Component({
    selector: 'dashboard',
    providers: [ServerListService],
    templateUrl: 'app/components/dashboard/dashboard.html',
    styleUrls: ['app/components/dashboard/dashboard.css'],
    directives: [Title, RdWidget, RdWidgetHeader, RdWidgetBody,
        RdWidgetFooter, RdLoading, ServerListView, UserListView, ActivityListView, PieChartView]
})
export class Dashboard {
    servers:any[];
    users:any[];
    activitys:any[];

    constructor(private serverListService:ServerListService, private userListService:UserListService, private activityListService:ActivityListService) {
        this.serverListService = serverListService;
        this.userListService = userListService;
        this.activityListService = activityListService;
    }

    ngOnInit() {
        this.servers = this.serverListService.all();
        this.users = this.userListService.all();
        this.activitys = this.activityListService.all();
    }
}
