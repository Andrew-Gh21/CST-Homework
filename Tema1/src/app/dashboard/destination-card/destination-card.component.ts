import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent {
  @Input() destination!: Destination;
  @Output() selectedCity = new EventEmitter<string>();
  constructor(private commonService: CommonService) {}

  visit(){
    this.commonService.emitImage(this.destination.image);
    this.selectedCity.emit(this.destination.title);
  }
}
