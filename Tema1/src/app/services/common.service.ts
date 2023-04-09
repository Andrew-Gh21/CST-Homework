import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private emitImageSource = new Subject<any>();

  imageEmitted$ = this.emitImageSource.asObservable();

  emitImage(change: string) {
    this.emitImageSource.next(change);
  }
}