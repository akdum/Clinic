import { Component, Input } from 'angular2/core';
import { Service } from '../../../data-interfaces/service';
import { Router } from 'angular2/router';

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