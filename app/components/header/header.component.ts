import {Component} from 'angular2/core';
import { LogoComponent } from './logo.component';
import { ContactsComponent } from './contacts.component';
import { CarouselComponent } from './carousel.component';
import { MobileNavComponent } from './mobile.nav.component';

@Component({
    selector: 'header-component',
    templateUrl: '../app/templates/header.component.html',
    directives: [LogoComponent, CarouselComponent, MobileNavComponent, ContactsComponent]
})
export class HeaderComponent {
    
}