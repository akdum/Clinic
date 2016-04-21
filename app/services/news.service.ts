import {Injectable} from 'angular2/core';
import { News } from '../data-interfaces/news';
import { DbService } from './db.service';

@Injectable()
export class NewsService {
    public newsList: News[] = [];
    
    constructor(private _db: DbService) {
    }
    
    getShortList() {
        if (this.newsList.length > 0) {
            return Promise.resolve(this.getNewsItemsWithLimit(this.newsList));
        } else {
            // query news.
            return new Promise(resolve=> this._db.getNews().then(function(data){
                this.newsList = data;
                resolve(this.getNewsItemsWithLimit(this.newsList));
            }.bind(this)));
        }
    }
    
    getNewsItemsWithLimit(newsItems:News[]) {
        if (newsItems.length > 3) {
            return newsItems.slice(0,3);
        } else {
            return newsItems;
        }
    }
}