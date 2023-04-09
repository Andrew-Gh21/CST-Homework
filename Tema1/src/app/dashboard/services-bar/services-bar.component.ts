import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-services-bar',
  templateUrl: './services-bar.component.html',
  styleUrls: ['./services-bar.component.scss']
})
export class ServicesBarComponent {

  @Input() service!: Service;

  constructor() { }

}
