import { Component, OnInit } from 'angular2/core';
import { Contacts } from '../../../data-interfaces/contacts';
import { ContactsService } from '../../../services/contacts.service';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    selector: 'phones-component',
    templateUrl: '../app/templates/phones.component.html'
})
export class PhonesComponent implements OnInit {
    private _contact: Contacts;
    
    constructor(private _contactsService: ContactsService, private _utilities: UtilitiesService) {
        this._contact = this._utilities.getBlankContacts();
     }

    ngOnInit() { 
        this._contactsService.getContacts().then(function(data) {
            this._contact = data;
        }.bind(this));
    }

}