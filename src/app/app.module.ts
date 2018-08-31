import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { SearchBarComponent } from './components/search_bar.component';
import { SearchResultComponent } from './components/search_result.component';  
import { ShowsItemComponent } from './components/shows_item.component';
import { ShowsComponent } from './components/shows.component';
import { ApiService } from './services/api.service';
import { EpisodeListComponent } from './components/episode_list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', redirectTo: '' },
  { path: 'search/:value', component: SearchResultComponent },
  { path: 'shows', redirectTo: '' },
  { path: 'shows/:id', component: ShowsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SearchResultComponent,
    ShowsItemComponent,
    ShowsComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
