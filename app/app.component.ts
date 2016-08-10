import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Tab } from './model/tab';
import { TabService } from './service/tabs.service.ts';
import { TabComponent } from './component/tab/tab.component.ts';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, TabComponent],
    providers: [
        TabService
    ]
})
export class AppComponent {
    title = 'Sample tabs Navigation';
    tabs: Tab[] = [];

    constructor(
        private tabService: TabService) {
    }

    ngOnInit() {
        this.tabService.getTabs()
            .then(tabs => this.tabs = tabs);
    }
}
