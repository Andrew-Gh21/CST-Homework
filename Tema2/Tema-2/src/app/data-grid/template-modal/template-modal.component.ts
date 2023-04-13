import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'app/interfaces/person';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss']
})
export class TemplateModalComponent implements OnInit, AfterViewInit{

  @Output() person = new EventEmitter<Person>();
  formPerson!: Person;
  isVisible: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.modalContentEmitted$.subscribe(person => {
      this.formPerson = person;
    })
  }

  ngAfterViewInit(): void {
    this.commonService.visibleModalEmitted$.subscribe(visibility => {
      this.isVisible = visibility; 
    })
  }

  handleOk(): void {
    this.person.emit(this.formPerson);
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
