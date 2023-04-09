import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{

  @Output() searchEvent = new EventEmitter<string>();

  
  inputText: string | undefined;
  constructor() { }

  emitText() {
    this.searchEvent.emit(this.inputText);
  }
}
