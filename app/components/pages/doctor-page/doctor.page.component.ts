import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Doctor } from '../../../data-interfaces/doctor';
import { CommonTextComponent } from '../../common/common.text.component';
import { CommonTitleComponent } from '../../common/common.title.component';
import { CommonBackComponent } from '../../common/common.back.component';
import { DoctorsService } from '../../../services/doctors.service';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    templateUrl: '../app/templates/doctor.page.component.html',
    directives: [CommonTextComponent, CommonBackComponent, CommonTitleComponent]
})
export class DoctorPageComponent implements OnInit {
    private _doctor: Doctor;
    private _backRouteName:string = "DoctorsPage";
    private _backTitle:string = "Вернуться в список врачей";
    
    constructor(private _routeParams: RouteParams, 
                private _doctors: DoctorsService,
                private _utilities: UtilitiesService) { 
                    this._doctor = this._utilities.getBlankDoctor();
                }

    ngOnInit() {
        let doctorUrl = this._routeParams.get('url');
        if (doctorUrl) {
            this._doctors.getDoctorsByUrls([doctorUrl]).then(function (data:Doctor[]) {
                if (data && data.length > 0) {
                    this._doctor = data[0];
                }
            }.bind(this));
        }
     }

}