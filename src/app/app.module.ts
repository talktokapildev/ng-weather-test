// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ForecastComponent } from './forecast/forecast.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { TopBarComponent } from './top-bar/top-bar.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ForecastComponent,
//     HomePageComponent,
//     TopBarComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule
} from "@angular/material";
import { HomePageComponent } from "./home-page/home-page.component";
import { StoreModule } from "@ngrx/store";
import { locationReducer } from "./location.reducer";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { FormsModule } from "@angular/forms";
import { WeatherService } from "./weather.service";
import { ForecastComponent } from "./forecast/forecast.component";
//import { AlertsComponent } from './alerts/alerts.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    ForecastComponent
    //AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
