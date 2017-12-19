import {Component, Input} from 'angular2/core';

@Component({
    selector: 'widget-header',
    templateUrl: 'app/components/widget-header/widget-header.html'
})
export class WidgetHeader {
    @Input()
    title:string;

    constructor() {
        this.title = '';
    }
}
