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
        title: 'Kayla\'s Goal Five commercial debut',
        content: this._sanitizer.bypassSecurityTrustHtml('<iframe width="100%" height="395" ' +
          'src="https://www.youtube.com/embed/R-HSQVZ4CtU?controls=0" ' +
          'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      },
      {
        published: new Date('5/21/2019'),
        title: 'America Has Lost A Generation Of Black Boys',
        content: '<p>There is no longer a need for dire predictions, hand-wringing, or apprehension about losing a generation of' +
          'black boys. It is too late. In education, employment, economics, incarceration, health, housing, and' +
          'parenting, we have lost a generation of young black men. The question that remains is will we lose the next' +
          'two or three generations, or possibly every generation of black boys hereafter to the streets, negative media,' +
          'gangs, drugs, poor education, unemployment, father absence, crime, violence and death.</p>' +
          '<p>Most young black men in the United States don&#39;t graduate from high school. Only 35% of black male' +
          'students graduated from high school in Chicago and only 26% in New York City, according to a 2006' +
          'report by The Schott Foundation for Public Education. Only a few black boys who finish high school' +
          'actually attend college, and of those few black boys who enter college, nationally, only 22% of them finish' +
          'college.</p>' +
          '<p>Young black male students have the worst grades, the lowest test scores, and the highest dropout rates of all' +
          'students in the country. When these young black men don&#39;t succeed in school, they are much more likely to' +
          'succeed in the nation&#39;s criminal justice and penitentiary system. And it was discovered recently that even' +
          'when a young black man graduates from a U.S. college, there is a good chance that he is from Africa, the' +
          'Caribbean or Europe, and not the United States.</p>' +
          '<p>Black men in prison in America have become as American as apple pie. There are more black men in' +
          'prisons and jails in the United States (about 1.1 million) than there are black men incarcerated in the rest of' +
          'the world combined. This criminalization process now starts in elementary schools with black male' +
          'children as young as six and seven years old being arrested in staggering numbers according to a 2005' +
          'report, Education on Lockdown by the Advancement Project.<p>' +
          '<p>The rest of the world is watching and following the lead of America. Other countries including England,' +
          'Canada, Jamaica, Brazil and South Africa are adopting American social policies that encourage the' +
          'incarceration and destruction of young black men. This is leading to a world-wide catastrophe. But still,' +
          'there is no adequate response from the American or global black community.</p>' +
          '<p>Worst of all is the passivity, neglect and disengagement of the black community concerning the future of' +
          'our black boys. We do little while the future lives of black boys are being destroyed in record numbers. The' +
          'schools that black boys attend prepare them with skills that will make them obsolete before, and if, they' +
          'graduate. In a strange and perverse way, the black community, itself, has started to wage a kind of war' +
          'against young black men and has become part of this destructive process.</p>' +
          '<p>Who are young black women going to marry? Who is going to build and maintain the economies of black' +
          'communities? Who is going to anchor strong families in the black community? Who will young black boys' +
          'emulate as they grow into men? Where is the outrage of the black community at the destruction of its black' +
          'boys? Where are the plans and the supportive actions to change this? Is this the beginning of the end of the' +
          'black people in America?</p>' +
          '<p>The list of those who have failed young black men includes our government, our foundations, our schools,' +
          'our media, our black churches, our black leaders, and even our parents. Ironically, experts say that the' +
          'solutions to the problems of young black men are simple and relatively inexpensive, but they may not be' +
          'easy, practical or popular. It is not that we lack solutions as much as it is that we lack the will to implement' +
          'these solutions to save black boys. It seems that government is willing to pay billions of dollars to lock up' +
          'young black men, rather than the millions it would take to prepare them to become viable contributors and' +
          'valued members of our society.</p>' +
          '<p>Please consider these simple goals that can lead to solutions for fixing the problems of young' +
          'black men:</p>' +
          '<p><strong>Short term</strong>' +
          '<ul><li>1) Teach all black boys to read at grade level by the third grade and to embrace education.</li>' +
          '<li>2) Provide positive role models for black boys. – the Mills Korner Inc.</li>' +
          '<li>3) Create a stable home environment for black boys that includes contact with their fathers.</li>' +
          '<li>4) Ensure that black boys have a strong spiritual base.</li>' +
          '<li>5) Control the negative media influences on black boys.</li>' +
          '<li>6) Teach black boys to respect all girls and women.</li></ul></p>' +
          '<p><strong>Long term</strong>' +
          '<ul><li>1) Invest as much money in educating black boys as in locking up black men.</li>' +
          '<li>2) Help connect black boys to a positive vision of themselves in the future.</li>' +
          '<li>3) Create high expectations and help black boys live into those high expectations.</li>' +
          '<li>4) Build a positive peer culture for black boys.</li>' +
          '<li>5) Teach black boys self-discipline, culture and history.</li>' +
          '<li>6) Teach black boys and the communities in which they live to embrace education and life-long learning.</li></ul></p>'
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
