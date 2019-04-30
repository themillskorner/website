import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {INews} from '../../_interfaces/news';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: INews[];
  safeUrl;

  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/R-HSQVZ4CtU?controls=0');

    this.news = [
      {
        published: new Date('4/29/2019'),
        title: 'Elements of Effective Practice for Mentoring [PDF]',
        content: '<p><a href="/assets/Mentoring_the blueprint_2019.pdf" download="Mentoring_the blueprint_2019.pdf">' +
          'Download the mentoring blueprint 2019 here</a></p>',
      },
      {
        published: new Date('4/29/2019'),
        title: 'Natitional Goal 5 Commercial',
        content: this._sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="395" ' +
          'src="https://www.youtube.com/embed/R-HSQVZ4CtU?controls=0" frameborder="0" ' +
          'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      }
    ];
  }

  all(): Observable<INews[]> {
    return of(this.news);
  }

  get(slug): Observable<INews> {
    return of(this.news.find(e => e.title.toLowerCase().replace(/[\[\]']+/g, '') === slug));
  }
}
