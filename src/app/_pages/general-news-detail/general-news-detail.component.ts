import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../../_services/news/news.service';
import {UnslugifyPipe} from '../../_pipes/unslugify.pipe';
import {INews} from '../../_interfaces/news';

@Component({
  selector: 'app-general-news-detail',
  templateUrl: './general-news-detail.component.html',
  styleUrls: ['./general-news-detail.component.css'],
  providers: [UnslugifyPipe]
})
export class GeneralNewsDetailComponent implements OnInit {
  slug: string;
  news: INews;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private unslugifyPipe: UnslugifyPipe
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    });

    this.newsService.get(this.unslugifyPipe.transform(this.slug)).subscribe(news => this.news = news);

  }

}
