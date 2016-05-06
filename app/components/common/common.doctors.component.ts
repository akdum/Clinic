import { Component, Input } from '@angular/core';

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
    
    constructor(private _doctorsService: DoctorsService, private _utilities:UtilitiesService) {        
    }
    
    @Input()
    set therapy(therapy:string) {
        if (therapy) {
            this._doctorsService.getDoctorsByTherapy(therapy).then(function(data:Doctor[]) {
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
}