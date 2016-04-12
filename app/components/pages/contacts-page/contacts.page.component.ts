import { Component } from 'angular2/core';
import { WorkHoursComponent } from './work.hours.component';
import { MapComponent } from './map.component';

@Component({
    templateUrl: '../app/templates/contacts.page.component.html',
    directives: [WorkHoursComponent, MapComponent]
})
export class ContactsPageComponent {
    
}