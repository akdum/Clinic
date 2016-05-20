import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Service } from '../../../data-interfaces/service';
import { ITab } from '../../../data-interfaces/itab';
import { CommonTitleComponent } from '../../common/common.title.component';
import { CommonBackComponent } from '../../common/common.back.component';
import { CommonTextComponent } from '../../common/common.text.component';
import { ServicesService } from '../../../services/services.service';
import { UtilitiesService } from '../../../services/utilities.service';
import { CommonPriceComponent } from '../../common/common.price.component';
import { CommonTabsComponent } from '../../common/common.tabs.component';
import { CommonDoctorsComponent } from '../../common/common.doctors.component';

@Component({
    templateUrl: '../app/templates/service.details.page.component.html',
    directives: [CommonTitleComponent,
                 CommonBackComponent,
                 CommonPriceComponent,
                 CommonTextComponent,
                 CommonDoctorsComponent,
                 CommonTabsComponent]
})
export class ServiceDetailsPageComponent implements OnInit {
    private _service: Service;
    private _backRouteName:string = "ServicesPage";
    private _backTitle:string = "Вернуться в каталог";
    private _tabs:ITab[];
    private _activeTab:string = "about";
    
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
                    this._tabs = [{displayName: "Об услуге", internalName: "about"},
                            {displayName: "Цены", internalName: "price"},
                            {displayName: "Специалисты", internalName: "doctors"}];
                }
            }.bind(this));
        }
    }
    
    onChangeActiveTabHandler(activeTab:string) {
        this._activeTab = activeTab;
    }

}