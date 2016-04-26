import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { News } from '../../../data-interfaces/news';
import { UtilitiesService } from '../../../services/utilities.service';
import { NewsService } from '../../../services/news.service';

@Component({
    templateUrl: '../app/templates/news.page.component.html'
})
export class NewsPageComponent implements OnInit {
    private _news: News;
    
    constructor(private _routeParams: RouteParams, 
                private _utilities:UtilitiesService,
                private _newsService: NewsService) { 
        this._news = this._utilities.getBlankNews();
    }

    ngOnInit() { 
        let newsId = this._routeParams.get('id');
        if (newsId) {
            this._newsService.getNewsById(parseInt(newsId)).then(function(data) {
                if (data) {
                    this._news = data;
                }
            }.bind(this));
        }
    }

}