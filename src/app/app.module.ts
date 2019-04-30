import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoachesKornerComponent } from './_pages/koaches-korner/koaches-korner.component';
import { GeneralNewsComponent } from './_pages/general-news/general-news.component';
import { PhotoAlbumComponent } from './_pages/photo-album/photo-album.component';
import { KoachTalkComponent } from './_pages/koach-talk/koach-talk.component';
import { ActivitiesComponent } from './_pages/activities/activities.component';
import { SpecialAssignmentsComponent } from './_pages/special-assignments/special-assignments.component';
import { BioComponent } from './_pages/bio/bio.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MainNavComponent } from './_components/main-nav/main-nav.component';
import { DonateComponent } from './_pages/donate/donate.component';
import { KontactComponent } from './_pages/kontact/kontact.component';
import { ChildSafetyComponent } from './_pages/child-safety/child-safety.component';
import { LifeKoachComponent } from './_pages/life-koach/life-koach.component';
import { AthleticYouthEmpowermentComponent } from './_pages/athletic-youth-empowerment/athletic-youth-empowerment.component';
import { DefaultComponent } from './_layouts/default/default.component';
import { HomeComponent } from './_pages/home/home.component';
import { MakingOfAMentorComponent } from './_pages/making-of-a-mentor/making-of-a-mentor.component';
import { HowWeCameToBeComponent } from './_pages/how-we-came-to-be/how-we-came-to-be.component';
import { EventsComponent } from './_pages/events/events.component';
import { EventDetailComponent } from './_pages/event-detail/event-detail.component';
import { TestimonialsComponent } from './_pages/testimonials/testimonials.component';
import { SlugifyPipe } from './_pipes/slugify.pipe';
import { UnslugifyPipe } from './_pipes/unslugify.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RemoveHtmlPipe} from './_pipes/remove-html.pipe';
import { GeneralNewsDetailComponent } from './_pages/general-news-detail/general-news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KoachesKornerComponent,
    GeneralNewsComponent,
    PhotoAlbumComponent,
    KoachTalkComponent,
    ActivitiesComponent,
    SpecialAssignmentsComponent,
    BioComponent,
    FooterComponent,
    MainNavComponent,
    DonateComponent,
    KontactComponent,
    ChildSafetyComponent,
    LifeKoachComponent,
    AthleticYouthEmpowermentComponent,
    DefaultComponent,
    HomeComponent,
    MakingOfAMentorComponent,
    HowWeCameToBeComponent,
    EventsComponent,
    EventDetailComponent,
    TestimonialsComponent,
    SlugifyPipe,
    UnslugifyPipe,
    RemoveHtmlPipe,
    GeneralNewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
