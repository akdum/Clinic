import { Component, Input} from 'angular2/core';
import { Service } from '../../../data-interfaces/service';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'services-group-rest-services-component',
    templateUrl: '../app/templates/services.group.rest.services.component.html'
})
export class ServicesGroupRestServicesComponent {
    private _services: Service[]=[];
    
    constructor(private _utilities:UtilitiesService, private _router: Router) {
        
    }
    
    @Input()
    set services(services:Service[]) {
        if (services) {
            this._services = services.filter((val)=>!val.isPopular);
            if (this._utilities.findBootstrapEnvironment() == 'lg') {
                let popularServices = services.filter((val)=>val.isPopular);
                if (popularServices.length>3) {
                    popularServices.slice(3).forEach((val)=>this._services.push(val));
                }
            }    
        }
    }
    
    gotoServiceDetails(service: Service) {
        let link = ['ServiceDetailsPage', { url: service.url }];
        this._router.navigate(link);
    }
}