System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ActivityListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActivityListService = (function () {
                function ActivityListService() {
                    this.activitys = [
                        { img: 'https://www.thyssenkrupp.com/brand/assets/img/12-interview-portrait-circle.png', name: 'Nina Jones', time: 'Just now', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'added a new project', part: 'free ui kit', select: 'vl' },
                        { img: 'https://capitalfoodfight.org/wp-content/uploads/2014/07/Doug-headshot-circle-web.png', name: 'James Smith', time: '40 minutes ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'commented project', part: 'free psd template', select: 'vl' },
                        { img: 'http://www.boycecollege.com/wp-content/uploads/2017/10/Denny-Burk-Circle.png', name: 'Alex Cloonye', time: '1 hour ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'completed task', part: 'symu website', select: 'vl' },
                        { img: 'https://www.howweelearn.com/wp-content/uploads/2017/02/sarah-profile-circle.png', name: 'Alexandra Spears', time: '3 hours ago', tooltipcls: 'dayLeft', icon: 'fa-clock-o', activity: 'added a new project', part: 'free PSD (..)' }
                    ];
                }
                ActivityListService.prototype.add = function (value) {
                    this.activitys.push(value);
                };
                ActivityListService.prototype.all = function () {
                    return this.activitys;
                };
                ActivityListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ActivityListService);
                return ActivityListService;
            }());
            exports_1("ActivityListService", ActivityListService);
        }
    }
});
//# sourceMappingURL=activity_list.js.map