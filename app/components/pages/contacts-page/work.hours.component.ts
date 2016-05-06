import { Component, OnInit } from '@angular/core';

import { Contacts } from '../../../data-interfaces/contacts';
import { ContactsService } from '../../../services/contacts.service';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    selector: 'work-hours-component',
    templateUrl: '../app/templates/work.hours.component.html'
})

export class WorkHoursComponent implements OnInit {
    private _contact: Contacts;
    
    constructor(private _contactsService:ContactsService, private _utlities: UtilitiesService) {
        this._contact = this._utlities.getBlankContacts();
     }

    ngOnInit() { 
        this._contactsService.getContacts().then(function(data) {
            this._contact = data;
        }.bind(this));
    }

}