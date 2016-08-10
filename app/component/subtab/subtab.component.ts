import { Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { SubTab } from '../../model/subTab';
import { TabComponent } from '../tab/tab.component.ts';


@Component({
    selector: 'sub-tab',
    templateUrl: 'app/component/subtab/subtab.component.html',
    styleUrls:  ['app/component/subtab/subtab.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class SubTabComponent {
    @Input() subTab: SubTab;
    
    constructor(private _router: Router){}
    
    route(){
        this._router.navigate([this.subTab.routeLink]);
    }

}