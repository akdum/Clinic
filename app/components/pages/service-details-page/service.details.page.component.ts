import { Component, OnInit } from 'angular2/core';
import { Service } from '../../../data-interfaces/service';
import { ServiceDetailsTitleComponent } from './service.details.title.component';
import { RouteParams } from 'angular2/router';
import { ServicesService } from '../../../services/services.service';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    templateUrl: '../app/templates/service.details.page.component.html',
    directives: [ServiceDetailsTitleComponent]
})
export class ServiceDetailsPageComponent implements OnInit {
    private _service: Service;
    
    constructor(private _routeParams: RouteParams,
                private _servicesService: ServicesService,
                private _utilities: UtilitiesService) { 
        this._service = _utilities.getBlankService();
    }

    ngOnInit() { 
        let serviceUrl = this._routeParams.get('url');
        if (serviceUrl) {
            this._servicesService.getServiceByUrl(serviceUrl).then(function(data) {
                if (data) {
                    this._service = data;
                }
            }.bind(this));
        }
    }

}