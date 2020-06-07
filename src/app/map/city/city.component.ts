import { Component, OnInit } from "@angular/core";
import { MapService } from "src/libs";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.scss"]
})
export class CityComponent implements OnInit {
  citiesData;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.citiesData = this.mapService.getCityNames();
  }
}
