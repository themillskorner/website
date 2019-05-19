import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MakingOfAMentorComponent} from './_pages/making-of-a-mentor/making-of-a-mentor.component';
import {KontactComponent} from './_pages/kontact/kontact.component';
import {DonateComponent} from './_pages/donate/donate.component';
import {KoachesKornerComponent} from './_pages/koaches-korner/koaches-korner.component';
import {EventsComponent} from './_pages/events/events.component';
import {AthleticYouthEmpowermentComponent} from './_pages/athletic-youth-empowerment/athletic-youth-empowerment.component';
import {GeneralNewsComponent} from './_pages/general-news/general-news.component';
import {GeneralNewsDetailComponent} from './_pages/general-news-detail/general-news-detail.component';
import {HowWeCameToBeComponent} from './_pages/how-we-came-to-be/how-we-came-to-be.component';
import {BioComponent} from './_pages/bio/bio.component';
import {TestimonialsComponent} from './_pages/testimonials/testimonials.component';
import {PhotoAlbumComponent} from './_pages/photo-album/photo-album.component';
import {ChildSafetyComponent} from './_pages/child-safety/child-safety.component';
import {DefaultComponent} from './_layouts/default/default.component';
import {HomeComponent} from './_pages/home/home.component';
import {EventDetailComponent} from './_pages/event-detail/event-detail.component';
import {BoardOfDirectorsComponent} from './_pages/board-of-directors/board-of-directors.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', component: DefaultComponent, children: [
      {path: 'making-of-a-mentor', component: MakingOfAMentorComponent},
      {path: 'kontact', component: KontactComponent},
      {path: 'donate', component: DonateComponent},
      {path: 'koaches-korner', component: KoachesKornerComponent},
      {path: 'events', component: EventsComponent},
      {path: 'events/:slug', component: EventDetailComponent},
      {path: 'athletic-youth-empowerment', component: AthleticYouthEmpowermentComponent},
      {path: 'general-news', component: GeneralNewsComponent},
      {path: 'general-news/:slug', component: GeneralNewsDetailComponent},
      {path: 'how-we-came-to-be', component: HowWeCameToBeComponent},
      {path: 'bio', component: BioComponent},
      {path: 'testimonials', component: TestimonialsComponent},
      {path: 'photo-album', component: PhotoAlbumComponent},
      {path: 'child-safety', component: ChildSafetyComponent},
      {path: 'board-of-directors', component: BoardOfDirectorsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

