import {Component, Output, EventEmitter} from '@angular/core';

import { ContactsFooterComponent } from './contacts.footer.component';
import { NavFooterComponent } from './nav.footer.component';
import { InfoFooterComponent } from './info.footer.component';

@Component({
    selector: 'footer-component',
    templateUrl: '../app/templates/footer.component.html',
    directives: [ContactsFooterComponent, NavFooterComponent, InfoFooterComponent]
})
export class FooterComponent {
}