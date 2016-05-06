import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'services-group-popular-component',
    templateUrl: '../app/templates/services.group.popular.component.html'
})
export class ServicesGroupPopularComponent {
    private _popularServices: Service[] = [];

    constructor(private _router: Router) {}

    @Input()
    set services(services:Service[]) {
        if (services) {
            this._popularServices = services.filter((val)=>val.isPopular);
        }
    }
    
    gotoServiceDetails(service: Service) {
        let link = ['ServiceDetailsPage', { url: service.url }];
        this._router.navigate(link);
    }
}