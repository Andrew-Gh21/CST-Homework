import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{
  @Input() titleInput!: Observable<string>;

  title!: string;
  image: string = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png';
  description: string ='This is your new Adventure'
  constructor(commonService: CommonService) { 
    commonService.imageEmitted$.subscribe(image => {
      this.image = image;
    });
    commonService.emitImage(this.image);
  }

  ngOnChanges(): void {
    this.titleInput.subscribe(input => this.title = input);
  }

  reset(){
    this.title="New Adventure";
    this.image='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png';
  }
}
