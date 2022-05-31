import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutSectionComponent,
    OurTeamComponent,
    OurProjectsComponent,
    OurClientsComponent,
    BannerSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
