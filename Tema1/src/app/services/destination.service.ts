import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';
import { Service } from '../models/service.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {

  private destinations: Destination[] = [
    {
      title: 'Capri',
      image:
        'https://cdn.images.ondaplatform.com/portals_articles/1244/cover/Capri-1.jpg?crop=smart&mt=1674553306&width=600&height=315&density=2',
      description:
        "Mermaids island",
    },
    {
      title: 'Monaco',
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/221202101101-05-what-its-like-to-live-monaco-street.jpg?c=original',
      description:
        "Millionaire paradise full of Ferraries",
    },
    {
      title: 'Istambul',
      image:
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg',
      description:
        "Capital of Turkey and the only city situated on two continents",
    },
    {
      title: 'Moscow',
      image:
        'https://moscowprivatetours.com/wp-content/uploads/2021/05/background.webp',
      description:
        "Capital of Russia full of colors",
    },
    {
      title: 'Budapest',
      image:
        'https://www.actualidadviajes.com/wp-content/uploads/2020/06/budapest-2.jpg',
      description:
        "Stunning landscape and rich architectural and historical heritage",
    },
    {
      title: 'Rome',
      image:
        'https://www.thetrainline.com/cms/media/1473/italy-rome-sunset.jpg',
      description:
        "A city that show the greatness of an fallen empire",
    }
  ];

  private services: Service[] =[
    {
      serviceName:"Travel",
      title:"Article title",
      description:"The description for the service",
    },
    {
      serviceName:"Travel Arrangements",
      title:"Article title",
      description:"The description for the service",
    },
    {
      serviceName:"Our Proffesional Guide",
      title:"Article title",
      description:"The description for the service",
    },
    {
      serviceName:"Activities",
      title:"Article title",
      description:"The description for the service",
    },
  ]

  constructor() {}


  getDestinations(): Observable<Destination[]> {
    return of(this.destinations);
  }

  getDestinationsByText(destination: string): Observable<Destination[]> {
    return of(this.destinations.filter(dest => destination === dest.title));
  }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }
}
