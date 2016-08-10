import { Tab } from '../model/tab';
import { Injectable } from '@angular/core';

const TABS: Tab[] = [
    {id: 1, name: 'Dashboard', routeLink: '/dashboard', selected: false, 
        subTabs: [
            {id: 1, name: 'Overview', routeLink: '/dashboard/overview', selected: false}, 
            {id: 2, name: 'Specification', routeLink: '/dashboard/spec', selected: false}
        ]
    },
    {id: 2, name: 'Portfolio', routeLink: '/portfolio', selected: false, subTabs: []}
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
