import { Component, OnInit } from 'angular2/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../data-interfaces/news';

@Component({
    selector: 'news-component',
    templateUrl: '../app/templates/news.component.html'
})
export class NewsComponent implements OnInit {
    private _newsList: News[] = [];
    
    constructor(private _news: NewsService) {
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
}