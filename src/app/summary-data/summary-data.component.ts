import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary-data',
  templateUrl: './summary-data.component.html',
  styleUrls: ['./summary-data.component.scss']
})
export class SummaryDataComponent implements OnInit {

constructor(private summaryService: SummaryService) { }
  
  // Go through all of the computers, count how many of them have 'active' as 'true'
  activeComputers: number = 0;
  // Go through all of the computers, count how many of them have 'active' as 'false'
  inactiveComputers: number = 0;
  // Go through all of the users, add up their ages, divide by how many users there are
  averageAge: number = 0;
  // Go through all of the users, keep a count of how many users are 25 or over
  usersOverTwentyFive: number = 0;

  ngOnInit() {
    // User Data
    this.summaryService.getData().subscribe(data => {
      const users = data["users"];
      for(let i = 0; i < users.length; i++) {
        this.averageAge += users[i].age;
        if(users[i].age >= 25) { this.usersOverTwentyFive++; }
      }
      this.averageAge = Math.round((this.averageAge/users.length));
    });
    // Computer Data
    this.summaryService.getData().subscribe(data => {
      const computers = data["computers"];
      for(let i = 0; i < computers.length; i++) {
        if(computers[i].active) {
          this.activeComputers++;
        } else {
          this.inactiveComputers++;
        }
      }
    })
  }
}
