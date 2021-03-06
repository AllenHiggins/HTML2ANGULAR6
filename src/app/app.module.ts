import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing.module';
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
import { MySiteComponent } from './my-site/my-site.component';
import { HeaderComponent } from './my-site/header/header.component';
import { MainComponent } from './my-site/main/main.component';
import { MyfooterComponent } from './my-site/myfooter/myfooter.component';
import { ParrallaxComponent } from './parrallax/parrallax.component';
import { AboutmeComponent } from './my-site/aboutme/aboutme.component';
import { LatestworkComponent } from './my-site/latestwork/latestwork.component';
import { CardsComponent } from './my-site/cards/cards.component';
import { StackComponent } from './my-site/stack/stack.component';
import { InterestComponent } from './my-site/interest/interest.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhotosliderComponent } from './photoslider/photoslider.component';
import { ClickmasterComponent } from './clickmaster/clickmaster.component';
import { MainclickComponent } from './clickmaster/mainclick/mainclick.component';
import { HeaderclickComponent } from './clickmaster/headerclick/headerclick.component';
import { FooterclickComponent } from './clickmaster/footerclick/footerclick.component';
import { PhotolistdisplayclickComponent } from './clickmaster/photolistdisplayclick/photolistdisplayclick.component';
import { AerialComponent } from './aerial/aerial.component';

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
    NgbdCarouselBasicComponent,
    MySiteComponent,
    HeaderComponent,
    MainComponent,
    MyfooterComponent,
    ParrallaxComponent,
    AboutmeComponent,
    LatestworkComponent,
    CardsComponent,
    StackComponent,
    InterestComponent,
    NotfoundComponent,
    PhotosliderComponent,
    ClickmasterComponent,
    MainclickComponent,
    HeaderclickComponent,
    FooterclickComponent,
    PhotolistdisplayclickComponent,
    AerialComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRouting
  ],
  providers: [MainContentService, TumbnailService, CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
