import { Component, OnInit } from 'angular2/core';
import { ServicesGroup } from '../../../data-interfaces/services.group';
import { RouteParams } from 'angular2/router';
import { ServicesService } from '../../../services/services.service';
import { ServicesGroupPopularComponent } from './services.group.popular.component';
import { ServicesGroupRestServicesComponent } from './services.group.rest.services.component';
import { CommonTitleComponent } from '../../common/common.title.component';
import { CommonBackComponent } from '../../common/common.back.component';
import { CommonDoctorsComponent } from '../../common/common.doctors.component';
import { CommonTextComponent } from '../../common/common.text.component';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    templateUrl: '../app/templates/services.group.details.page.component.html',
    directives: [CommonTitleComponent, 
                 CommonBackComponent,
                 ServicesGroupPopularComponent, 
                 ServicesGroupRestServicesComponent,
                 CommonDoctorsComponent,
                 CommonTextComponent]
})
export class ServicesGroupDetailsPageComponent implements OnInit {
    private _servicesGroup: ServicesGroup;
    private _backRouteName:string = "ServicesPage";
    private _backTitle:string = "Вернуться в каталог";
    
    constructor(private _routeParams: RouteParams, 
                private _servicesService: ServicesService,
                private _utilities: UtilitiesService) { 
        this._servicesGroup = _utilities.getBlankServicesGroup();
    }

    ngOnInit() {
        let serviceGroupUrl = this._routeParams.get('url');
        if (serviceGroupUrl) {
            this._servicesService.getServicesGroupByUrl(serviceGroupUrl).then(function(data) {
                if (data) {
                    this._servicesGroup = data;
                }
            }.bind(this));
        }
    }

}