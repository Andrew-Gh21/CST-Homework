import { Component, OnInit } from '@angular/core';
import { Person } from 'app/interfaces/person';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  headerColumnNames = ["firstName", "lastName", "address", "gender", "registrationDate", "lastModified", "action"];

  listOfData: Person[] = [
    {
      "Id": "2",
      "FirstName": 'Andrei',
      "LastName": 'TOPG',
      "Address": "Romania, Brasov, Cristian, Strada Strazilor 1, Ap 21 A",
      "Gender": 'Are',
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": "1",
      "FirstName": 'Ravzan',
      "LastName": 'Mehic',
      "Address": "Strada 1",
      "Gender": 'Are',
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": "1",
      "FirstName": 'Folrin',
      "LastName": 'Lorin',
      "Address": "Strada 1",
      "Gender": 'Are',
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": "1",
      "FirstName": 'Andrei',
      "LastName": 'TOPG',
      "Address": "Strada 1",
      "Gender": 'Are',
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
    {
      "Id": "1",
      "FirstName": 'Ravzan',
      "LastName": 'Mehic',
      "Address": "Strada 1",
      "Gender": 'Are',
      "RegistrationDate": new Date("2019-01-16").toDateString(),
      "LastModified": new Date("2019-01-16").toDateString(),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
