import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { NewsService } from '../../../services/news.service';
import { News } from '../../../data-interfaces/news';

@Component({
    selector: 'news-component',
    templateUrl: '../app/templates/news.component.html'
})
export class NewsComponent implements OnInit {
    private _newsList: News[] = [];
    
    constructor(private _news: NewsService, private _router: Router) {
    }
    
    ngOnInit() {
        this.getNews();
    }
    
    getNews() {
         this._news.getShortList().then(function (data) {
             this._newsList = data;
         }.bind(this))
    }
    
    getFormatedDate(date: Date) {
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!

        var yyyy = date.getFullYear();
        return (dd<10?'0'+dd.toString():dd.toString())+'.'+ (mm<10?'0' + mm.toString():mm.toString())+'.'+yyyy;
    }    
    
    gotoNews(news:News) {
        let link = ['NewsPage', { id: news.id }];
        this._router.navigate(link);
    }
}