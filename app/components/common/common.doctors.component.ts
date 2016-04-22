import { Component, Input } from 'angular2/core';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../data-interfaces/doctor';
import { DoctorViewModel } from '../../data-interfaces/doctor.viewmodel';
import { CONFIG } from '../../config/config';

@Component({
    selector: 'common-doctors-component',
    templateUrl: '../app/templates/common.doctors.component.html'
})
export class CommonDoctorsComponent {
    private _doctors: DoctorViewModel[]=[];
    
    constructor(private _doctorsService: DoctorsService) {
        
    }
    
    @Input()
    set therapy(therapy:string) {
        if (therapy) {
            this._doctorsService.getDoctorsByTherapy(therapy).then(function(data) {
                if (data.length > 0) {
                    this._doctors = data.map(d=>new DoctorViewModel(d.name, 
                                                                    d.therapy, 
                                                                    d.url,
                                                                    CONFIG.DB.BUCKETS.DOCTORS_PHOTO + d.photoName,
                                                                    d.text));
                };
            }.bind(this));
        }
    }
}