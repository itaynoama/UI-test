import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {Dashboard} from './components/dashboard/dashboard';
import {MessageListService} from './services/message_list';
import {TaskListService} from './services/task_list';
import {ActivityListService} from './services/activity_list';


@RouteConfig([
    {path: '/', component: Dashboard, name: 'Dashboard'}
])
@Component({
    selector: 'app',
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES]
})
class Main {

    mobileView:number = 992;
    toggle:boolean = false;

    constructor() {
        this.attachEvents();
    }

    attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }
}

bootstrap(Main, [ROUTER_PROVIDERS, MessageListService, TaskListService, ActivityListService,
    bind(LocationStrategy).toClass(HashLocationStrategy)]);
