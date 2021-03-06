import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { DoctorsService } from '../../services/doctors.service';
import { UtilitiesService } from '../../services/utilities.service';
import { Doctor } from '../../data-interfaces/doctor';
import { DoctorViewModel } from '../../data-interfaces/doctor.viewmodel';

@Component({
    selector: 'common-doctors-component',
    templateUrl: '../app/templates/common.doctors.component.html',
    inputs: ['noTitle']
})
export class CommonDoctorsComponent {
    private _doctors: DoctorViewModel[]=[];
    public noTitle:boolean;
    
    constructor(private _doctorsService: DoctorsService, 
                private _utilities:UtilitiesService,
                private _router: Router) {        
    }
    
    @Input()
    set urls(urls:string[]) {
        if (urls) {
            this._doctorsService.getDoctorsByUrls(urls).then(function(data:Doctor[]) {
                if (data.length > 0) {
                    this._doctors = this._utilities.convertDoctorArrayToDoctorViewModelArray(data);
                };
            }.bind(this));            
        }
    }
    
    @Input()
    set loadAll(loadAll:boolean){
        if (loadAll) {
            this._doctorsService.getDoctors().then(function(data:Doctor[]) {
                if (data.length > 0) {
                    this._doctors = this._utilities.convertDoctorArrayToDoctorViewModelArray(data);
                };
            }.bind(this));
        }
    }    
    
    gotoDoctor(doctor: Doctor) {
        let link = ['DoctorPage', { url: doctor.url }];
        this._router.navigate(link);
    }
}