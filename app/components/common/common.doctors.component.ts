import { Component, Input } from 'angular2/core';

@Component({
    selector: 'common-doctors-component',
    templateUrl: '../app/templates/doctors.component.html'
})
export class CommonDoctorsComponent {
    
    @Input()
    set therapy(therapy:string) {
        
    }
}