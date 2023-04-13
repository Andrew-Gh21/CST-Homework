import { Injectable } from "@angular/core";
import { Person } from "app/interfaces/person";

@Injectable({ providedIn: 'root' })
export class PersonService {

  listOfData: Person[] = [
    {
      "Id": 1,
      "FirstName": 'Andrei1',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 2,
      "FirstName": 'Andrei2',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 3,
      "FirstName": 'Andrei3',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 4,
      "FirstName": 'Andrei4',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 5,
      "FirstName": 'Andrei5',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 6,
      "FirstName": 'Andrei6',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 7,
      "FirstName": 'Andrei7',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 8,
      "FirstName": 'Andrei8',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 9,
      "FirstName": 'Andrei9',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 10,
      "FirstName": 'Andrei10',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 11,
      "FirstName": 'Andrei11',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 12,
      "FirstName": 'Andrei12',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 13,
      "FirstName": 'Andrei13',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 14,
      "FirstName": 'Andrei14',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 15,
      "FirstName": 'Andrei15',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": 16,
      "FirstName": 'Andrei16',
      "LastName": 'Gh',
      "Address": "Romania",
      "Age": 21,
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
  ];

  getUsers (pageIndex: number, pageSize: number){
    var result: Person[] = [];
    for(let i=(pageIndex-1)*pageSize; i<pageSize*pageIndex; i++){
      let person = this.listOfData.at(i);
      if(person!=null){
        result.push(person);
      }
    }
    return result;
  }

  getTotal(){
    return this.listOfData.length;
  }

  pushNewPerson(person: Person){
    this.listOfData.push(person);
  }

  editPerson(person: Person){
    this.listOfData = this.listOfData.map( x => {
      x = x.Id === person.Id ? person : x
      return x;
    });
  }
  constructor() {}
}