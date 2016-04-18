import { Component, Input } from 'angular2/core';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'services-group-popular-component',
    templateUrl: '../app/templates/services.group.popular.component.html'
})
export class ServicesGroupPopularComponent {
    public _popularServices: Service[] = [];

    @Input()
    set services(services:Service[]) {
        if (services) {
            this._popularServices = services.filter((val)=>val.isPopular);
        }
    }
}