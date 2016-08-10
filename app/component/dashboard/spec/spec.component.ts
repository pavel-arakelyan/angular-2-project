import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../../tab/tab.component.ts';

@Component({
    selector: 'overview',
    templateUrl: 'app/component/dashboard/spec/spec.component.html',
    styleUrls: ['app/component/dashboard/spec/spec.component.css'],
    directives: [TabComponent]
})
export class SpecComponent {

}