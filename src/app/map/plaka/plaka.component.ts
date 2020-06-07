import { Component, OnInit } from "@angular/core";
import { MapService } from "src/libs";

@Component({
  selector: "app-plaka",
  templateUrl: "./plaka.component.html",
  styleUrls: ["./plaka.component.scss"]
})
export class PlakaComponent implements OnInit {
  plakaData;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.plakaData = this.mapService.getCityPlakas();
  }
}
