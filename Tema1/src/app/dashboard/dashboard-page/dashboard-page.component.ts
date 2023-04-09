import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Destination } from 'src/app/models/destination.model';
import { Service } from 'src/app/models/service.model';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  
  destinations!: Destination[];
  services!: Service[];

  $selectedCity: Observable<string> = of("New Adventure");
  constructor(private destinationService: DestinationService) {
    
  }

  ngOnInit(){
    this.destinationService.getDestinations().subscribe((dest) => this.destinations = dest);
    this.destinationService.getServices().subscribe((serv) => this.services = serv);
  }

  emitNewDestination($event: string){
    if($event.length === 0){
      this.destinationService.getDestinations().subscribe((dest) => this.destinations = dest);
    }
    else{
      this.destinationService.getDestinationsByText($event).subscribe((dest) => this.destinations = dest);
    }
  }

  emitSelectedCity($event: string){
    this.$selectedCity=of($event);
  }

}
