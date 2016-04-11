import { Component } from 'angular2/core';
import { PopularServicesComponent } from './popular.services.component'
import { SpecialOffersComponent } from './special.offers.component';
import { NewsComponent } from './news.component';

@Component({
    templateUrl: '../app/templates/main.page.component.html',
    directives: [PopularServicesComponent, SpecialOffersComponent, NewsComponent]
})
export class MainPageComponent {
    
}