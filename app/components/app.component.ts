import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EnrollModalComponent } from './dialog/enroll.modal.component';
import { MainPageComponent } from './pages/main-page/main.page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts.page.component';

@Component({
    selector:'clinic-app',
    templateUrl:'../app/templates/app.component.html',
    directives: [HeaderComponent, FooterComponent, EnrollModalComponent, ROUTER_DIRECTIVES,ContactsPageComponent, NavComponent]
})
@RouteConfig([
    {
        path: '/',
        name: 'MainPage',
        component: MainPageComponent,
        useAsDefault: true
    }, 
    {
        path: '/contacts',
        name: 'ContactsPage',
        component: ContactsPageComponent
    }
])
export class AppComponent {
    public openEnrollModal = false;
    
    // dialog start.
    
    onOpenEnrollModalNavHandler(open:boolean) {
        this.openEnrollModal = open;
    }
    
    onOpenEnrollModalFooterHandler(open:boolean) {
        this.openEnrollModal = open;
    }
    
    onCloseEnrollModalHandler(isOpen:boolean){
        this.openEnrollModal = isOpen;
    }
    
    // dialog end.   
}