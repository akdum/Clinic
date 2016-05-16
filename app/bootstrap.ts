import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './components/app.component';
import { AssetsService } from './services/assets.service';
import { ContactsService } from './services/contacts.service';
import { ServicesService } from './services/services.service';
import { SpecialOffersService } from './services/special.offers.service';
import { NewsService } from './services/news.service';
import { DbService } from './services/db.service';
import { UtilitiesService } from './services/utilities.service';
import { DoctorsService } from './services/doctors.service';
import { AboutService } from './services/about.service';
import { AwsService } from './services/aws.service';

bootstrap(AppComponent, [AwsService,
                         AssetsService, 
                         ContactsService, 
                         ServicesService, 
                         SpecialOffersService, 
                         NewsService, 
                         DbService, 
                         DoctorsService, 
                         UtilitiesService, 
                         ROUTER_PROVIDERS, 
                         AboutService]);