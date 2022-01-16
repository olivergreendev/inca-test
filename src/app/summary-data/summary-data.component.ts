import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary-data',
  templateUrl: './summary-data.component.html',
  styleUrls: ['./summary-data.component.scss']
})
export class SummaryDataComponent implements OnInit {

constructor(private summaryService: SummaryService) { }
  
  activeComputers: number = 0;
  inactiveComputers: number = 0;
  averageAge: number = 0;
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
    });
  }
}
