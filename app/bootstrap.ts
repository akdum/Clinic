import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './components/app.component';
import { AssetsService } from './services/assets.service';
import { ContactsService } from './services/contacts.service';
import { ServicesService } from './services/services.service';
import { SpecialOffersService } from './services/special.offers.service';
import { NewsService } from './services/news.service';
import { DbService } from './services/db.service';
import { UtilitiesService } from './services/utilities.service';
import { ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(AppComponent, [AssetsService, ContactsService, ServicesService, SpecialOffersService, NewsService, DbService, UtilitiesService, ROUTER_PROVIDERS]);