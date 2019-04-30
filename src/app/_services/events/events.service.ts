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
        date: new Date('6/2/2019'),
        title: 'Kicks with Kay Soccer Kamp',
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
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>',
        price: 6000
      },
      {
        date: new Date('6/8/2019'),
        title: 'Kicks with Kay Soccer Kamp',
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
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>',
        price: 6000
      },
      {
        date: new Date('6/15/2019'),
        title: 'Kicks with Kay Soccer Kamp',
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
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>',
        price: 6000
      },
      {
        date: new Date('4/28/2019'),
        title: 'Fortnite Battle Royal Tournament',
        details: '<p>Elimination rounds will be determined by four (4) solo matches. For information call Kevin at 818-317-1256.</p>' +
          '<p><i>Online participants mandatory (if not, you will be disqualified) to stream live.</i></p>' +
          '<p>Please provide legal name, email address, cell phone number, and gamer name in form below</p>' +
          '<ul>' +
          '<li>$35 Single player buy-in</li>' +
          '<li>Winner determined by most kills!</li>' +
          '<li>Bring your own controller (PC will be used)</li>' +
          '<li>Group discount 4 players $125</li>' +
          '<li>Special Note: If the number of participants is not enough to cover $500, the prive may be lower. ' +
          'The more participants the higher the prize.</li>' +
          '<li>$500 - 1st Place</li>' +
          '<li>Cash or gift card option - 2nd Place</li>' +
          '<li>Cash or gift card option - 3nd Place</li>' +
          '<li>Spectator entry fee - $5.00</li>' +
          '</ul>' +
          '<h5>Tournament Date and Time</h5>' +
          '<p>Sunday, April 28, 2019</p>' +
          '<p>Tournament begin time to be announced on Friday, April 26, 2019 at 6:00pm by text message.</p>' +
          '<p>Practice round will be provided</p>',
        venue: '404 ESport Gaming',
        address: '1447 Foothull Blvd. La Verne, Ca 91750',
        price: 3500
      },
      {
        date: new Date('6/22/2019'),
        title: 'Kicks with Kay Soccer Kamp',
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
          '<p>Now you can learn a few great tips to improve your game with Kayla Mills during her Summer Kamp. </p>',
        price: 6000
      },
    ]);
  }

  all(): Observable<IEvent[]> {
    return of(this.events);
  }

  get(slug): Observable<IEvent> {
    return of(this.events.find(e => e.title.toLowerCase() === slug));
  }

  orderByDate(events) {
    this.events = events.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
  }
}
