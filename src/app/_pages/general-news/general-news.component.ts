import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../_services/news/news.service';
import {INews} from '../../_interfaces/news';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css']
})
export class GeneralNewsComponent implements OnInit {
  news: INews[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.all().subscribe(news => this.news = news);
  }

}
