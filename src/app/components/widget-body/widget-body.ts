import {Component, Input} from 'angular2/core';
@Component({
    selector: 'widget-body',
    properties: ['classes'],
    templateUrl: 'app/components/widget-body/widget-body.html'
})
export class WidgetBody {

    @Input()
    classes:string;

    constructor() {
        this.classes = '';
    }
}
