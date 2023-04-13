import { Injectable } from "@angular/core";
import { Person } from "app/interfaces/person";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private emitVisibleModalSource = new Subject<any>();
  private emitContentSource = new Subject<any>();

  visibleModalEmitted$ = this.emitVisibleModalSource.asObservable();
  modalContentEmitted$ = this.emitContentSource.asObservable();

  emitModalVisibility(change: boolean) {
    this.emitVisibleModalSource.next(change);
  }

  emitModalContent(change: Person) {
    this.emitContentSource.next(change);
  }
}