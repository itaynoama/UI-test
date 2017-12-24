import {Component, Input} from 'angular2/core';

@Component({
    selector: 'message-list-view',
    templateUrl: 'app/components/message-list-view/message-list-view.html',
    directives: []
})
export class MessageListView {

    @Input()
    model:any[];

    constructor() {
        this.model = [];
    }
}
