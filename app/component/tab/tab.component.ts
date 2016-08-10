import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Tab } from '../../model/tab';
import {SubTabComponent} from "../subtab/subtab.component";

@Component({
    selector: 'tab',
    templateUrl: 'app/component/tab/tab.component.html',
    styleUrls: ['app/component/tab/tab.component.css'],
    directives: [ROUTER_DIRECTIVES, SubTabComponent],
})
export class TabComponent {
    @Input() tab: Tab;

}
