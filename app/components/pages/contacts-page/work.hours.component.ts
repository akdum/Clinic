import { Component, OnInit } from 'angular2/core';
import { Contacts } from '../../../data-interfaces/contacts';
import { ContactsService } from '../../../services/contacts.service';

@Component({
    selector: 'work-hours-component',
    templateUrl: '../app/templates/work.hours.component.html'
})

export class WorkHoursComponent implements OnInit {
    private _contact: Contacts;
    
    constructor(private _contactsService:ContactsService) {
        this._contact = new Contacts("","",[],[],"","","");
     }

    ngOnInit() { 
        this._contactsService.getContacts().then(function(data) {
            this._contact = data;
        }.bind(this));
    }

}