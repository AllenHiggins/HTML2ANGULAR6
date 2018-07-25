import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoHeaderComponent } from './strata/info-header/info-header.component';
import { MainSectionComponent } from './strata/main-section/main-section.component';
import { LinksComponent } from './strata/links/links.component';
import { FooterComponent } from './strata/footer/footer.component';
import { MainContentService } from './strata/Services/main-content.service';
import { RecentWorkComponent } from './strata/recent-work/recent-work.component';
import { TumbnailService } from './strata/Services/tumbnail.service';
import { GetInTouchComponent } from './strata/get-in-touch/get-in-touch.component';
import { FormsModule } from '@angular/forms';
import { StrataComponent } from './strata/strata.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasicComponent } from './strata/ngbd-modal-basic/ngbd-modal-basic.component';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselService } from './ngbd-carousel-basic/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoHeaderComponent,
    MainSectionComponent,
    LinksComponent,
    FooterComponent,
    RecentWorkComponent,
    GetInTouchComponent,
    StrataComponent,
    NgbdModalBasicComponent,
    NgbdCarouselBasicComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [MainContentService, TumbnailService, CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
