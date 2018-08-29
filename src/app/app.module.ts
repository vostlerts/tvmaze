import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { SearchBarComponent } from './components/searchbar.component';
import { SearchResultComponent } from './components/searchresult.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', redirectTo: '' },
  { path: 'search/:value', component: SearchResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
