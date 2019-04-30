import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BioComponent} from './_pages/bio/bio.component';
import {SpecialAssignmentsComponent} from './_pages/special-assignments/special-assignments.component';
import {ActivitiesComponent} from './_pages/activities/activities.component';
import {KoachTalkComponent} from './_pages/koach-talk/koach-talk.component';
import {PhotoAlbumComponent} from './_pages/photo-album/photo-album.component';
import {GeneralNewsComponent} from './_pages/general-news/general-news.component';
import {KoachesKornerComponent} from './_pages/koaches-korner/koaches-korner.component';
import {DonateComponent} from './_pages/donate/donate.component';
import {KontactComponent} from './_pages/kontact/kontact.component';
import {LifeKoachComponent} from './_pages/life-koach/life-koach.component';
import {AthleticYouthEmpowermentComponent} from './_pages/athletic-youth-empowerment/athletic-youth-empowerment.component';
import {ChildSafetyComponent} from './_pages/child-safety/child-safety.component';
import {DefaultComponent} from './_layouts/default/default.component';
import {HomeComponent} from './_pages/home/home.component';
import {MakingOfAMentorComponent} from './_pages/making-of-a-mentor/making-of-a-mentor.component';
import {EventsComponent} from './_pages/events/events.component';
import {EventDetailComponent} from './_pages/event-detail/event-detail.component';
import {HowWeCameToBeComponent} from './_pages/how-we-came-to-be/how-we-came-to-be.component';
import {TestimonialsComponent} from './_pages/testimonials/testimonials.component';
import {GeneralNewsDetailComponent} from './_pages/general-news-detail/general-news-detail.component';

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


      // TODO: Possible deletions
      {path: 'life-koach', component: LifeKoachComponent},
      {path: 'koach-talk', component: KoachTalkComponent},
      {path: 'activities', component: ActivitiesComponent},
      {path: 'special-assignments', component: SpecialAssignmentsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

