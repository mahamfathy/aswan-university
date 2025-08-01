import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../../../shared/shared.module';
import { CollegesComponent } from './components/colleges/colleges.component';
import { NewsAnnouncementComponent } from './components/news-announcement/news-announcement.component';
import { SharedCardComponent } from './components/news-announcement/shared-card/shared-card.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideosComponent } from './components/videos/videos.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    HomeComponent,
    NewsAnnouncementComponent,
    RankingComponent,
    NumbersComponent,
    VideosComponent,
    CollegesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    CommonModule,
    CarouselModule,
    SharedModule,
    MatStepperModule,
    SharedCardComponent,
  ],
  exports: [],
})
export class HomeModule {}
