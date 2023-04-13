import { Component, OnInit } from '@angular/core';
import { Person } from 'app/interfaces/person';
import { CommonService } from 'app/services/common.service';
import { PersonService } from 'app/services/person.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  total = 0;
  listOfData: Person[] = [];
  loading = true;
  pageSize = 8;
  pageIndex = 1;
  headerColumnNames = ["firstName", "lastName", "address", "age", "registrationDate", "lastModified", "action"];

  constructor(private personService: PersonService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.getData();
    this.loading=false;
  }

  getData(){
    this.listOfData = this.personService.getUsers(this.pageIndex,this.pageSize);
    this.total=this.personService.getTotal();
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    this.loading=true;
    const { pageSize, pageIndex} = params;
    this.pageSize=pageSize;
    this.pageIndex=pageIndex;
    this.listOfData = this.personService.getUsers(pageIndex, pageSize);
    this.total=this.personService.getTotal();
    this.loading=false;
  }

  addPerson(){
    var newPerson={
      Id: this.total+1,
      RegistrationDate: new Date().toDateString(),
      LastModified: new Date().toDateString(),
    } as Person
    this.setModalContent(newPerson);
  }

  setModalContent(data: Person){
    this.commonService.emitModalContent(data);
    this.commonService.emitModalVisibility(true);
  }

  editPerson(person: Person){
    const personCopy = JSON.parse(JSON.stringify(person)) as Person;
    this.setModalContent(personCopy);
  }

  personEmited(person: Person){
    if(person.Id < this.total){
      person.LastModified = new Date().toDateString();
      this.personService.editPerson(person);
    }
    else{
      this.personService.pushNewPerson(person);
      
    }
    this.getData();
  }
}
