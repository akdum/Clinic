import {Component} from '@angular/core';

import { LogoComponent } from './logo.component';
import { ContactsComponent } from './contacts.component';
import { MobileNavComponent } from './mobile.nav.component';
import { SloganComponent } from './slogan.component';

@Component({
    selector: 'header-component',
    templateUrl: '../app/templates/header.component.html',
    directives: [LogoComponent, SloganComponent, MobileNavComponent, ContactsComponent]
})
export class HeaderComponent {
    
}