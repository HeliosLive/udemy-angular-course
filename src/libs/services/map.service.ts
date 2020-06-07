import { Injectable } from "@angular/core";

interface city {
  id: number;
  name: string;
  plaka: number;
  region: string;
}

@Injectable({
  providedIn: "root"
})
export class MapService {
  cities = [
    {
      id: 1,
      name: "İstanbul",
      region: "Marmara",
      plaka: 34
    },
    {
      id: 2,
      name: "İzmir",
      region: "Ege",
      plaka: 35
    },
    {
      id: 3,
      name: "Ankara",
      region: "Anadolu",
      plaka: 6
    },
    {
      id: 4,
      name: "Kütahya",
      region: "Anadolu",
      plaka: 43
    },
    {
      id: 5,
      name: "Antalya",
      region: "Akdeniz",
      plaka: 7
    },
    {
      id: 6,
      name: "Samsun",
      region: "Karadeniz",
      plaka: 55
    }
  ];

  constructor() {}

  getCityNames() {
    return this.cities.map(elem => ({
      id: elem.id,
      name: elem.name
    }));
  }

  getCityPlakas() {
    return this.cities.map(elem => ({
      id: elem.id,
      name: elem.name,
      plaka: elem.plaka
    }));
  }

  getCityRegions() {
    return this.cities.map(elem => ({
      id: elem.id,
      name: elem.name,
      region: elem.region
    }));
  }

  save(value: city) {
    const index = this.cities.findIndex(el => el.id === value.id);

    if (index > -1) {
      this.cities[index] = value;
    } else {
      this.cities.push(value);
    }
  }
}
