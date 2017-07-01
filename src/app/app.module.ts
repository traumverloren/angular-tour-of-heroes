import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})

export class AppModule { }
