import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IEvent} from '../../_interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events: IEvent[];

  constructor() {
    this.orderByDate([
      {
        venue: 'La Verne Lutheran High School',
        address: '3960 Fruit Street La Verne, CA 91750',
        date: new Date('6/15/2019'),
        title: 'Kicks with Kay Soccer Kamp - June 15',
        details: '<div class="video">\n' +
          '<video width="100%" controls id="videoPlayer">\n' +
          '    <source src="assets/videos/Kayla Mills.mp4" type="video/mp4" />\n' +
          '    Browser not supported\n' +
          '</video>\n' +
          '</div>' +
          '<p>"She plugged holes. Her positioning allowed center backs Ally Prisock and Mandy Freeman to show off their athleticism and ' +
          'cut off passes into target forwards and make runs forward. \n' +
          '<p>When the Trojans had possession, Mills was one of the best at adjusting her body so she could receive the ball and then ' +
          'play a quality pass to a teammate. Her off-the-ball movement showed that she is an incredibly intelligent player." - ' +
          'Continue reading ' +
          '<a href="https://www.topdrawersoccer.com/college-soccer-articles/confident-mills-key-for-uscs-championship_aid41137">here</a> ' +
          '</p>' +
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>' +
          '' +
          '<img src="assets/images/kayla/flyer-june-15.jpg">' +
          '' +
          '<h4>Accolades</h4>' +
          '<p>2016: Was named to the watch list for the prestigious MAC Hermann Trophy Award, given to the nation\'s top collegiate male ' +
          'and female soccer players.</p>' +
          '<p>2016: Pac-12-All-Academic</p>' +
          '<p>2015: Pac-12 All-Academic Honorable Mention</p>' +
          '<p>2014: Pac-12 All-Academic Honorable Mention</p>' +
          '<p>NATIONAL TEAMS- Current member of the U.S. Women\'s Youth National Team U-23 squad...In August 2016 was named the top ' +
          'defender in the U.S. Women\'s National Team Youth pool by TopDrawer Soccer...Previously competed with the U.S. Under-20 Team ' +
          'and U-17 Team.</p>' +
          '<p>2015: Pac-12 Defensive Player of the Year...2015 All-Pac-12 First Team Selection...NSCAA All-Pacific Region First Team ' +
          'selection....NSCAA All-America Second Team honoree...Named to the Duke Nike Classic All-Tournament Team (4 team tourney, all ' +
          'ranked squads, Duke, North Carolina, USC and California)...Started all 23 games for the Trojans as a defensive back...' +
          'Finished tied for third on the team with 10 points (two goals, six assists)...The six assists are tied for a team high in ' +
          'that category...Took 48 shots (14 on goal)...First goal of the year was a game-winner on Sept. 11 vs. USD in the 2-1 victory' +
          '...Also scored against Oregon on Oct. 17...Tallied two assists, a season-high on Oct. 11 vs. Arizona in a 3-1 victory...Also ' +
          'had two assists in the Trojans\' come-from-behind victory in the first round of the NCAA Tournament against Cal State ' +
          'Fullerton (Nov. 13)...Had a season-high five shots twice (Sept. 11 vs. USD, Nov. 13 vs. Cal State Fullerton)...Earned Pac-12 ' +
          'Defensive Player of the Week honors (Sept. 7-13), after scoring the game-winning goal against USD, along with headlining a ' +
          'stalwart defense that only allowed one goal in 200 minutes over two different games...Also an excellent student, earned ' +
          'Pac-12 All-Academic honorable mention honors.</p>' +
          '<p>2014: Mills earned All-Pac-12 First Team honors and NSCAA All-West Region First Team honors...Excels in the classroom as ' +
          'well as a Pac-12 All-Academic honorable mention selection...Appeared in all 21 games, starting 19 of them, mostly as an ' +
          'outside defender...Had two goals and two assists, collecting the most points (six) of any defender as she is a threat to ' +
          'make a run down the flank at any moment...Had goals in back-to-back games (vs. UC Riverside 9/4 and vs. Pacific 9/12).</p>' +
          '<p>2013: Mills appeared in all 20 games, starting 19 of them as a true freshman in 2013...She earned a selection on the ' +
          'Pac-12 All-Freshman squad...Collected 16 total points on four goals and eight assists to lead the team...Her eight assists ' +
          'were also a team high, while her four goals were good for third-best...Scored goals in wins vs. San Diego State, Cal State ' +
          'Northridge and Oregon and another in a tie vs. Minnesota...Trojans were 3-0-1 when Mills found the back of the net...Trojans ' +
          'were 5-2-0 when she got on the board with an assist...Had a season and career-high two assists vs. Loyola Marymount.</p>' +
          '<p>HIGH SCHOOL: Mills competed in soccer and track at Flintridge Sacred Heart Academy... A two-time All-American... Named ' +
          '2013 league MVP and to All-CIF Southern Section First Team... Helped team win 2012 CIF Division I championship... Played club ' +
          'for Slammers FC and Barcelona FC... Won regional and national championships in ODP... An honor student.</p>' +
          '<p><strong>Pre-Register for the event and save $50 - $125.00 early online or $175.00 on site day of event.</strong></p>' +
          '<p>Interested in personal instruction? <strong><a routerLink="/contact">contact us here</a></strong></p>' +
          '<p><strong><a href="/assets/2019 - KICKS with KAY KAMP WAIVER.pdf" download>Download Waiver</a></strong></p>',
        price: 12500,
        images: [
          'assets/images/kayla/1.jpg',
          'assets/images/kayla/2.jpg',
          'assets/images/kayla/3.jpg',
          'assets/images/kayla/4.jpg',
          'assets/images/kayla/5.jpg',
          'assets/images/kayla/6.jpg',
          'assets/images/kayla/7.jpg',
          'assets/images/kayla/8.jpg',
          'assets/images/kayla/9.jpg',
          'assets/images/kayla/10.jpg',
          'assets/images/kayla/11.jpg',
          'assets/images/kayla/12.jpg',
          'assets/images/kayla/13.jpg',
          'assets/images/kayla/14.jpg'
        ],
        links: [
          {
            title: 'Wikipedia',
            link: 'https://en.wikipedia.org/wiki/Kayla_Mills',
          },
          {
            title: 'Onceametro',
            link: 'https://www.onceametro.com/2017/4/26/15434000/kayla-mills-sky-blue-fc-from-late-bloomer-to-first-round-draft-pick-usc-trojans-christy-holly'
          }
        ]
      },
      {
        date: new Date('6/22/2019'),
        title: 'Kicks with Kay Soccer Kamp - June 22',
        details: '<div class="video">\n' +
          '<video width="100%" controls id="videoPlayer">\n' +
          '    <source src="assets/videos/Kayla Mills.mp4" type="video/mp4" />\n' +
          '    Browser not supported\n' +
          '</video>\n' +
          '</div>' +
          '<p>"She plugged holes. Her positioning allowed center backs Ally Prisock and Mandy Freeman to show off their athleticism and ' +
          'cut off passes into target forwards and make runs forward. \n' +
          '<p>When the Trojans had possession, Mills was one of the best at adjusting her body so she could receive the ball and then ' +
          'play a quality pass to a teammate. Her off-the-ball movement showed that she is an incredibly intelligent player." - ' +
          'Continue reading ' +
          '<a href="https://www.topdrawersoccer.com/college-soccer-articles/confident-mills-key-for-uscs-championship_aid41137">here</a> ' +
          '</p>' +
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>' +
          '<h4>Accolades</h4>' +
          '<p>2016: Was named to the watch list for the prestigious MAC Hermann Trophy Award, given to the nation\'s top collegiate male and female soccer players.</p>' +
          '<p>NATIONAL TEAMS- Current member of the U.S. Women\'s Youth National Team U-23 squad...In August 2016 was named the top defender in the U.S. Women\'s National Team Youth pool by TopDrawer Soccer...Previously competed with the U.S. Under-20 Team and U-17 Team.</p>' +
          '<p>2015: Pac-12 Defensive Player of the Year...2015 All-Pac-12 First Team Selection...NSCAA All-Pacific Region First Team selection....NSCAA All-America Second Team honoree...Named to the Duke Nike Classic All-Tournament Team (4 team tourney, all ranked squads, Duke, North Carolina, USC and California)...Started all 23 games for the Trojans as a defensive back...Finished tied for third on the team with 10 points (two goals, six assists)...The six assists are tied for a team high in that category...Took 48 shots (14 on goal)...First goal of the year was a game-winner on Sept. 11 vs. USD in the 2-1 victory...Also scored against Oregon on Oct. 17...Tallied two assists, a season-high on Oct. 11 vs. Arizona in a 3-1 victory...Also had two assists in the Trojans\' come-from-behind victory in the first round of the NCAA Tournament against Cal State Fullerton (Nov. 13)...Had a season-high five shots twice (Sept. 11 vs. USD, Nov. 13 vs. Cal State Fullerton)...Earned Pac-12 Defensive Player of the Week honors (Sept. 7-13), after scoring the game-winning goal against USD, along with headlining a stalwart defense that only allowed one goal in 200 minutes over two different games...Also an excellent student, earned Pac-12 All-Academic honorable mention honors.</p>' +
          '<p>2014: Mills earned All-Pac-12 First Team honors and NSCAA All-West Region First Team honors...Excels in the classroom as well as a Pac-12 All-Academic honorable mention selection...Appeared in all 21 games, starting 19 of them, mostly as an outside defender...Had two goals and two assists, collecting the most points (six) of any defender as she is a threat to make a run down the flank at any moment...Had goals in back-to-back games (vs. UC Riverside 9/4 and vs. Pacific 9/12).</p>' +
          '<p>2013: Mills appeared in all 20 games, starting 19 of them as a true freshman in 2013...She earned a selection on the Pac-12 All-Freshman squad...Collected 16 total points on four goals and eight assists to lead the team...Her eight assists were also a team high, while her four goals were good for third-best...Scored goals in wins vs. San Diego State, Cal State Northridge and Oregon and another in a tie vs. Minnesota...Trojans were 3-0-1 when Mills found the back of the net...Trojans were 5-2-0 when she got on the board with an assist...Had a season and career-high two assists vs. Loyola Marymount.</p>' +
          '<p>HIGH SCHOOL: Mills competed in soccer and track at Flintridge Sacred Heart Academy... A two-time All-American... Named 2013 league MVP and to All-CIF Southern Section First Team... Helped team win 2012 CIF Division I championship... Played club for Slammers FC and Barcelona FC... Won regional and national championships in ODP... An honor student.</p>' +
          '<p><strong>Pre-Register for the event and save $50 - $125.00 early online or $175.00 on site day of event.</strong></p>' +
          '<p>Interested in personal instruction? <strong><a routerLink="/contact">contact us here</a></strong></p>' +
          '<p><strong><a href="/assets/2019 - KICKS with KAY KAMP WAIVER.pdf" download>Download Waiver</a></strong></p>',
        price: 12500,
        images: [
          'assets/images/kayla/1.jpg',
          'assets/images/kayla/2.jpg',
          'assets/images/kayla/3.jpg',
          'assets/images/kayla/4.jpg',
          'assets/images/kayla/5.jpg',
          'assets/images/kayla/6.jpg',
          'assets/images/kayla/7.jpg',
          'assets/images/kayla/8.jpg',
          'assets/images/kayla/9.jpg'
        ],
        links: [
          {
            title: 'Wikipedia',
            link: 'https://en.wikipedia.org/wiki/Kayla_Mills',
          },
          {
            title: 'Onceametro',
            link: 'https://www.onceametro.com/2017/4/26/15434000/kayla-mills-sky-blue-fc-from-late-bloomer-to-first-round-draft-pick-usc-trojans-christy-holly'
          }
        ]
      },
      {
        date: new Date('6/29/2019'),
        title: 'Kicks with Kay Soccer Kamp - June 29',
        details: '<div class="video">\n' +
          '<video width="100%" controls id="videoPlayer">\n' +
          '    <source src="assets/videos/Kayla Mills.mp4" type="video/mp4" />\n' +
          '    Browser not supported\n' +
          '</video>\n' +
          '</div>' +
          '<p>"She plugged holes. Her positioning allowed center backs Ally Prisock and Mandy Freeman to show off their athleticism and ' +
          'cut off passes into target forwards and make runs forward. \n' +
          '<p>When the Trojans had possession, Mills was one of the best at adjusting her body so she could receive the ball and then ' +
          'play a quality pass to a teammate. Her off-the-ball movement showed that she is an incredibly intelligent player." - ' +
          'Continue reading ' +
          '<a href="https://www.topdrawersoccer.com/college-soccer-articles/confident-mills-key-for-uscs-championship_aid41137">here</a> ' +
          '</p>' +
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>' +
          '<h4>Accolades</h4>' +
          '<p>2016: Was named to the watch list for the prestigious MAC Hermann Trophy Award, given to the nation\'s top collegiate male and female soccer players.</p>' +
          '<p>NATIONAL TEAMS- Current member of the U.S. Women\'s Youth National Team U-23 squad...In August 2016 was named the top defender in the U.S. Women\'s National Team Youth pool by TopDrawer Soccer...Previously competed with the U.S. Under-20 Team and U-17 Team.</p>' +
          '<p>2015: Pac-12 Defensive Player of the Year...2015 All-Pac-12 First Team Selection...NSCAA All-Pacific Region First Team selection....NSCAA All-America Second Team honoree...Named to the Duke Nike Classic All-Tournament Team (4 team tourney, all ranked squads, Duke, North Carolina, USC and California)...Started all 23 games for the Trojans as a defensive back...Finished tied for third on the team with 10 points (two goals, six assists)...The six assists are tied for a team high in that category...Took 48 shots (14 on goal)...First goal of the year was a game-winner on Sept. 11 vs. USD in the 2-1 victory...Also scored against Oregon on Oct. 17...Tallied two assists, a season-high on Oct. 11 vs. Arizona in a 3-1 victory...Also had two assists in the Trojans\' come-from-behind victory in the first round of the NCAA Tournament against Cal State Fullerton (Nov. 13)...Had a season-high five shots twice (Sept. 11 vs. USD, Nov. 13 vs. Cal State Fullerton)...Earned Pac-12 Defensive Player of the Week honors (Sept. 7-13), after scoring the game-winning goal against USD, along with headlining a stalwart defense that only allowed one goal in 200 minutes over two different games...Also an excellent student, earned Pac-12 All-Academic honorable mention honors.</p>' +
          '<p>2014: Mills earned All-Pac-12 First Team honors and NSCAA All-West Region First Team honors...Excels in the classroom as well as a Pac-12 All-Academic honorable mention selection...Appeared in all 21 games, starting 19 of them, mostly as an outside defender...Had two goals and two assists, collecting the most points (six) of any defender as she is a threat to make a run down the flank at any moment...Had goals in back-to-back games (vs. UC Riverside 9/4 and vs. Pacific 9/12).</p>' +
          '<p>2013: Mills appeared in all 20 games, starting 19 of them as a true freshman in 2013...She earned a selection on the Pac-12 All-Freshman squad...Collected 16 total points on four goals and eight assists to lead the team...Her eight assists were also a team high, while her four goals were good for third-best...Scored goals in wins vs. San Diego State, Cal State Northridge and Oregon and another in a tie vs. Minnesota...Trojans were 3-0-1 when Mills found the back of the net...Trojans were 5-2-0 when she got on the board with an assist...Had a season and career-high two assists vs. Loyola Marymount.</p>' +
          '<p>HIGH SCHOOL: Mills competed in soccer and track at Flintridge Sacred Heart Academy... A two-time All-American... Named 2013 league MVP and to All-CIF Southern Section First Team... Helped team win 2012 CIF Division I championship... Played club for Slammers FC and Barcelona FC... Won regional and national championships in ODP... An honor student.</p>' +
          '<p><strong>Pre-Register for the event and save $50 - $125.00 early online or $175.00 on site day of event.</strong></p>' +
          '<p>Interested in personal instruction? <strong><a routerLink="/contact">contact us here</a></strong></p>' +
          '<p><strong><a href="/assets/2019 - KICKS with KAY KAMP WAIVER.pdf" download>Download Waiver</a></strong></p>',
        price: 12500,
        images: [
          'assets/images/kayla/1.jpg',
          'assets/images/kayla/2.jpg',
          'assets/images/kayla/3.jpg',
          'assets/images/kayla/4.jpg',
          'assets/images/kayla/5.jpg',
          'assets/images/kayla/6.jpg',
          'assets/images/kayla/7.jpg',
          'assets/images/kayla/8.jpg',
          'assets/images/kayla/9.jpg'
        ],
        links: [
          {
            title: 'Wikipedia',
            link: 'https://en.wikipedia.org/wiki/Kayla_Mills',
          },
          {
            title: 'Onceametro',
            link: 'https://www.onceametro.com/2017/4/26/15434000/kayla-mills-sky-blue-fc-from-late-bloomer-to-first-round-draft-pick-usc-trojans-christy-holly'
          }
        ]
      },
    ]);
  }

  all(): Observable<IEvent[]> {
    return of(this.events);
  }

  get(slug): Observable<IEvent> {
    return of(this.events.find(e => e.title.toLowerCase().replace(/-/g, '').replace(/ +(?= )/g, '') === slug));
  }

  orderByDate(events) {
    this.events = events.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
  }
}
