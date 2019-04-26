import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoachesKornerComponent } from './_pages/koaches-korner/koaches-korner.component';
import { InMyClassComponent } from './_pages/in-my-class/in-my-class.component';
import { TutoringComponent } from './_pages/tutoring/tutoring.component';
import { GeneralNewsComponent } from './_pages/general-news/general-news.component';
import { MillsWhoComponent } from './_pages/mills-who/mills-who.component';
import { ScheduleComponent } from './_pages/schedule/schedule.component';
import { ScoresComponent } from './_pages/scores/scores.component';
import { StatsComponent } from './_pages/stats/stats.component';
import { NcaaStandardsComponent } from './_pages/ncaa-standards/ncaa-standards.component';
import { PhotoAlbumComponent } from './_pages/photo-album/photo-album.component';
import { KoachTalkComponent } from './_pages/koach-talk/koach-talk.component';
import { CurriculumComponent } from './_pages/curriculum/curriculum.component';
import { ActivitiesComponent } from './_pages/activities/activities.component';
import { SpecialAssignmentsComponent } from './_pages/special-assignments/special-assignments.component';
import { ScrapbookComponent } from './_pages/scrapbook/scrapbook.component';
import { ArchiveComponent } from './_pages/archive/archive.component';
import { BioComponent } from './_pages/bio/bio.component';
import { PhilosophyComponent } from './_pages/philosophy/philosophy.component';
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

@NgModule({
  declarations: [
    AppComponent,
    KoachesKornerComponent,
    InMyClassComponent,
    TutoringComponent,
    GeneralNewsComponent,
    MillsWhoComponent,
    ScheduleComponent,
    ScoresComponent,
    StatsComponent,
    NcaaStandardsComponent,
    PhotoAlbumComponent,
    KoachTalkComponent,
    CurriculumComponent,
    ActivitiesComponent,
    SpecialAssignmentsComponent,
    ScrapbookComponent,
    ArchiveComponent,
    BioComponent,
    PhilosophyComponent,
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
    RemoveHtmlPipe
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
