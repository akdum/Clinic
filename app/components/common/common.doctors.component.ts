import { Component, Input } from 'angular2/core';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../data-interfaces/doctor';

@Component({
    selector: 'common-doctors-component',
    templateUrl: '../app/templates/common.doctors.component.html'
})
export class CommonDoctorsComponent {
    private _doctors: Doctor[]=[];
    
    constructor(private _doctorsService: DoctorsService) {
        
    }
    
    @Input()
    set therapy(therapy:string) {
        if (therapy) {
            this._doctorsService.getDoctorsByTherapy(therapy).then(function(data) {
                this._doctors = data;
            }.bind(this));
        }
    }
}