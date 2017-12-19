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
    var MessageListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageListService = (function () {
                function MessageListService() {
                    this.messages = [
                        { img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hey you! its me again :) i attached new (..)', time: '5 minutes ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog', select: 'selected' },
                        { img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hey! i attached sone new PSD files for (..)', time: 'About 20 hours ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog', select: 'selected' },
                        { img: 'http://foodpictures.net/wp-content/uploads/2017/03/profile_picture_300x300-circle.png', name: 'James Smith', message: 'Good Morning, you are fired!', time: '2 days ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog' },
                        { img: 'https://fashionz.co.nz/wp-content/uploads/2016/11/Evelyn-circle-1.jpg', name: 'Nina Jones', message: 'Hello Could you bring me coffee please ?', time: 'About 2 weeks ago', replyIcon: 'fa-reply', settingsIcon: 'fa-cog' }
                    ];
                }
                MessageListService.prototype.add = function (value) {
                    this.messages.push(value);
                };
                MessageListService.prototype.all = function () {
                    return this.messages;
                };
                MessageListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MessageListService);
                return MessageListService;
            }());
            exports_1("MessageListService", MessageListService);
        }
    }
});
//# sourceMappingURL=message_list.js.map