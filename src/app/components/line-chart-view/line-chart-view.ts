import {Component} from 'angular2/core';

@Component({
    selector: 'line-chart-view',
    properties: ['model'],
    templateUrl: 'app/components/line-chart-view/line-chart-view.html'
})
export class LineChartView {

    model:any[];

    constructor() {
        this.model = [];
    }
}
