import { Component } from 'angular2/core';
import { CommonDoctorsComponent } from '../../common/common.doctors.component';

@Component({
    templateUrl: '../app/templates/doctors.page.component.html',
    directives: [CommonDoctorsComponent]
})
export class DoctorsPageComponent {
}