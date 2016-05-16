import {Component, Output, EventEmitter} from '@angular/core';

import { ContactsFooterComponent } from './contacts.footer.component';
import { NavFooterComponent } from './nav.footer.component';

@Component({
    selector: 'footer-component',
    templateUrl: '../app/templates/footer.component.html',
    directives: [ContactsFooterComponent, NavFooterComponent]
})
export class FooterComponent {
}