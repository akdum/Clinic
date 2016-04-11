import { Component } from 'angular2/core';
import { ContactsTextComponent } from './contacts.text.component';
import { MapComponent } from './map.component';

@Component({
    templateUrl: '../app/templates/contacts.page.component.html',
    directives: [ContactsTextComponent, MapComponent]
})
export class ContactsPageComponent {
    
}