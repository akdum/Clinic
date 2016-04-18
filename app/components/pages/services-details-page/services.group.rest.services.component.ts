import { Component, Input} from 'angular2/core';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'services-group-rest-services-component',
    templateUrl: '../app/templates/services.group.rest.services.component.html'
})
export class ServicesGroupRestServicesComponent {
    private _services: Service[]=[];
    
    @Input()
    set services(services:Service[]) {
        if (services) {
            this._services = services.filter((val)=>!val.isPopular);
        }
    }
}