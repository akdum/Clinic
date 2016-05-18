import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './pages/main-page/main.page.component';
import { AboutPageComponent } from './pages/about-page/about.page.component';
import { ServicesPageComponent } from './pages/services-page/services.page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts.page.component';
import { DoctorsPageComponent } from './pages/doctors-page/doctors.page.component';
import { NewsPageComponent } from './pages/news-page/news.page.component';
import { ServicesGroupDetailsPageComponent } from './pages/services-details-page/services.group.details.page.component';
import { ServiceDetailsPageComponent } from './pages/service-details-page/service.details.page.component';
import { GetDiscountPageComponent } from './pages/get-discount-page/get.discount.page.component';

@Component({
    selector:'clinic-app',
    templateUrl:'../app/templates/app.component.html',
    directives: [HeaderComponent, 
                 FooterComponent, 
                 ROUTER_DIRECTIVES,
                 AboutPageComponent,
                 ServicesPageComponent,
                 ContactsPageComponent,
                 DoctorsPageComponent,
                 NewsPageComponent,
                 GetDiscountPageComponent, 
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
        path: '/about',
        name: 'AboutPage',
        component: AboutPageComponent  
    },
    {
        path: '/doctors',
        name: 'DoctorsPage',
        component: DoctorsPageComponent  
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
    },
    {
        path: '/service-details/:url',
        name: 'ServiceDetailsPage',
        component: ServiceDetailsPageComponent
    },
    {
        path: '/news/:id',
        name: 'NewsPage',
        component: NewsPageComponent
    },
    {
        path: '/discount',
        name: 'DiscountPage',
        component: GetDiscountPageComponent
    }
])
export class AppComponent {
    constructor(private _router: Router) {
        _router.subscribe(()=>{
            window.scrollTo(0,0);
        });
    }
}