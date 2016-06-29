import { Component } from '@angular/core';
import { PopularServicesComponent } from './popular.services.component'
import { SpecialOffersComponent } from './special.offers.component';

@Component({
    templateUrl: '../app/templates/main.page.component.html',
    directives: [PopularServicesComponent, SpecialOffersComponent]
})
export class MainPageComponent {
    
}