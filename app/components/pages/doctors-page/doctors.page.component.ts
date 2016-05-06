import { Component } from '@angular/core';

import { CommonDoctorsComponent } from '../../common/common.doctors.component';

@Component({
    templateUrl: '../app/templates/doctors.page.component.html',
    directives: [CommonDoctorsComponent]
})
export class DoctorsPageComponent {
}