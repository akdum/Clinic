import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EnrollModalComponent } from './dialog/enroll.modal.component';
import { MainPageComponent } from './pages/main-page/main.page.component';
import { ServicesPageComponent } from './pages/services-page/services.page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts.page.component';
import { ServicesGroupDetailsPageComponent } from './pages/services-details-page/services.group.details.page.component';

@Component({
    selector:'clinic-app',
    templateUrl:'../app/templates/app.component.html',
    directives: [HeaderComponent, 
                 FooterComponent, 
                 EnrollModalComponent, 
                 ROUTER_DIRECTIVES,
                 ServicesPageComponent,
                 ContactsPageComponent, 
                 NavComponent]
})
@RouteConfig([
    {
        path: '/',
        name: 'MainPage',
        component: MainPageComponent,
        useAsDefault: true
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: ServicesPageComponent
    },
    {
        path: '/contacts',
        name: 'ContactsPage',
        component: ContactsPageComponent
    },
    {
        path: '/services-group-details/:url',
        name: 'ServicesGroupDetailsPage',
        component: ServicesGroupDetailsPageComponent
    }
])
export class AppComponent {
    public openEnrollModal = false;
    
    constructor(private _router: Router) {
        _router.subscribe(()=>{
            window.scrollTo(0,0);
        });
    }
    
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