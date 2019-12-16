import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"]
})
export class ForecastComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  forecast: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchForecast(loc);
    });
  }

  ngOnInit() {}

  searchForecast(loc: string) {
    if (loc) {
      this.weatherService.getForecast(loc).subscribe(
        res => {
          this.forecast = res;
        },
        err => {}
      );
    }
  }

  resultFound() {
    return Object.keys(this.forecast).length > 0;
  }
}
