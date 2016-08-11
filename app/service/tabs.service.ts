import { Tab } from '../model/tab';
import { Injectable } from '@angular/core';

const TABS: Tab[] = [
    {id: 1, messageId: 'tab.dashboard', routeLink: '/dashboard', selected: false, 
        subTabs: [
            {id: 1, messageId: 'subTab.overview', routeLink: '/dashboard/overview', selected: false}, 
            {id: 2, messageId: 'subTab.spec', routeLink: '/dashboard/spec', selected: false}
        ]
    },
    {id: 2, messageId: 'tab.portfolio', routeLink: '/portfolio', selected: false, subTabs: []}
];

@Injectable()
export class TabService {
    getTabs() {
        return Promise.resolve(TABS);
    }

    getTabsSlowly() {
        return new Promise<Tab[]>(resolve =>
            setTimeout(() => resolve(TABS), 2000) // 2 seconds
        );
    }

    getTab(id: number) {
        return this.getTabs()
            .then(tabs => tabs.find(tab => tab.id === id));
    }
}
