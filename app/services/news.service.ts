import {Injectable} from 'angular2/core';
import { News } from '../data-interfaces/news';
import { DbService } from './db.service';
import { UtilitiesService } from './utilities.service';

@Injectable()
export class NewsService {
    private _newsList: News[] = [];
    
    constructor(private _db: DbService, private _utilities: UtilitiesService) {
    }
    
    getNews():Promise<News[]> {
        if (this._newsList.length > 0) {
            return Promise.resolve(this._newsList);
        } else {
            // query news.
            return new Promise(resolve=> this._db.getNews().then(function(data){
                this._newsList = data;
                resolve(this._newsList);
            }.bind(this)));
        }
    }
    
    getShortList():Promise<News[]> {
        if (this._newsList.length > 0) {
            return Promise.resolve(this.getNewsItemsWithLimit(this._newsList));
        } else {
            // query news.
            return new Promise(resolve=> this._db.getNews().then(function(data){
                this._newsList = data;
                resolve(this.getNewsItemsWithLimit(this._newsList));
            }.bind(this)));
        }
    }
    
    getNewsById(id:number):Promise<News>{
        if (this._newsList.length > 0) {
            return this.tryGetNews(id);
        } else {
            // load news list first.
            return new Promise<News>(resolve=> this.getNews().then(function (data) {
                resolve(this.tryGetNews(id));
            }.bind(this)));
        }
    }
    
    private getNewsItemsWithLimit(newsItems:News[]) {
        if (newsItems.length > 3) {
            return newsItems.slice(0,3);
        } else {
            return newsItems;
        }
    }
    
    private tryGetNews(id:number):Promise<News> {
        let news: News = this._newsList.find((val)=>val.id == id);
        
        if (news) {
            if (news.text.length > 0) {
                Promise.resolve(news);
            } else {
                return new Promise<News>(resolve=>this._db.getNewsDetailsByIdAndTitle(news.title, news.id).then(function (data){
                    news = data;
                    this._utilities.replaceOrAddItemInArrayById(this._newsList, news, id);
                    resolve(news);
                }.bind(this)));
            }
        } else {
            return Promise.resolve(this._utilities.getBlankNews());  
        }
    }
}