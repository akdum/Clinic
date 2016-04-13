import { Component } from 'angular2/core';
import { WorkHoursComponent } from './work.hours.component';
import { PhonesComponent } from './phones.component';
import { MapComponent } from './map.component';

@Component({
    templateUrl: '../app/templates/contacts.page.component.html',
    directives: [WorkHoursComponent, PhonesComponent, MapComponent]
})
export class ContactsPageComponent {
    
}