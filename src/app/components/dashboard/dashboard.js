System.register(['angular2/core', '../title/title', '../widget/widget', '../widget-header/widget-header', '../widget-body/widget-body', '../widget-footer/widget-footer', '../task-list-view/task-list-view', '../../services/task_list', '../message-list-view/message-list-view', '../../services/message_list', '../activity-list-view/activity-list-view', '../../services/activity_list', '../pie-chart-view/pie-chart-view'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, title_1, widget_1, widget_header_1, widget_body_1, widget_footer_1, task_list_view_1, task_list_1, message_list_view_1, message_list_1, activity_list_view_1, activity_list_1, pie_chart_view_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (title_1_1) {
                title_1 = title_1_1;
            },
            function (widget_1_1) {
                widget_1 = widget_1_1;
            },
            function (widget_header_1_1) {
                widget_header_1 = widget_header_1_1;
            },
            function (widget_body_1_1) {
                widget_body_1 = widget_body_1_1;
            },
            function (widget_footer_1_1) {
                widget_footer_1 = widget_footer_1_1;
            },
            function (task_list_view_1_1) {
                task_list_view_1 = task_list_view_1_1;
            },
            function (task_list_1_1) {
                task_list_1 = task_list_1_1;
            },
            function (message_list_view_1_1) {
                message_list_view_1 = message_list_view_1_1;
            },
            function (message_list_1_1) {
                message_list_1 = message_list_1_1;
            },
            function (activity_list_view_1_1) {
                activity_list_view_1 = activity_list_view_1_1;
            },
            function (activity_list_1_1) {
                activity_list_1 = activity_list_1_1;
            },
            function (pie_chart_view_1_1) {
                pie_chart_view_1 = pie_chart_view_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(taskListService, messageListService, activityListService) {
                    this.taskListService = taskListService;
                    this.messageListService = messageListService;
                    this.activityListService = activityListService;
                    this.taskListService = taskListService;
                    this.messageListService = messageListService;
                    this.activityListService = activityListService;
                }
                Dashboard.prototype.ngOnInit = function () {
                    this.tasks = this.taskListService.all();
                    this.messages = this.messageListService.all();
                    this.activitys = this.activityListService.all();
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [task_list_1.TaskListService],
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        styleUrls: ['app/components/dashboard/dashboard.css'],
                        directives: [title_1.Title, widget_1.Widget, widget_header_1.WidgetHeader, widget_body_1.WidgetBody,
                            widget_footer_1.WidgetFooter, task_list_view_1.TaskListView, message_list_view_1.MessageListView, activity_list_view_1.ActivityListView, pie_chart_view_1.PieChartView]
                    }), 
                    __metadata('design:paramtypes', [task_list_1.TaskListService, message_list_1.MessageListService, activity_list_1.ActivityListService])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map