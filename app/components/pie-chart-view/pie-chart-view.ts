import {Component} from 'angular2/core';

@Component({
    selector: 'pie-chart-view',
    properties: ['model'],
    templateUrl: 'app/components/pie-chart-view/pie-chart-view.html'
})
export class PieChartView {

    model:any[];

    constructor() {
        this.model = [];
    }
}
