import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../../tab/tab.component.ts';

@Component({
    selector: 'overview',
    templateUrl: 'app/component/dashboard/overview/overview.component.html',
    styleUrls: ['app/component/dashboard/overview/overview.component.css'],
    directives: [TabComponent]
})
export class OverviewComponent {

}