import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../model/tab';
import { TabService } from '../../service/tabs.service.ts';
import { TabComponent } from '../tab/tab.component.ts';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/component/portfolio/portfolio.component.html',
    styleUrls: ['app/component/portfolio/portfolio.component.css'],
    directives: [TabComponent],
})
export class PortfolioComponent {

    tabs: Tab[] = [];

    constructor(
        private tabService: TabService) {
    }

    ngOnInit() {
        this.tabService.getTabs()
            .then(tabs => this.tabs = tabs);
    }

    /*gotoDetail(tab: Tab) {
        let link = ['/detail', tab.id];
        this.router.navigate(link);
    }*/
}