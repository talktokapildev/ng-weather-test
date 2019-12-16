import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SET_LOCATION } from "../location.reducer";
import { NgForm } from "@angular/forms";

export interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  loc: string;
  selected: string;
  locations: Location[] = [
    { value: "London", viewValue: "London" },
    { value: "Cardiff", viewValue: "Cardiff" },
    { value: "Birmingham", viewValue: "Birmingham" }
  ];
  constructor(private store: Store<any>) {}
  ngOnInit() {}

  locChangeHandler($event) {
    this.store.dispatch({ type: SET_LOCATION, payload: this.selected });
  }
}
