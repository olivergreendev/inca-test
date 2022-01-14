import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})

export class UserDataComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'userImage', 'name', 'email', 'gender', 'role', 'age'];
  userData: UserModel[] = [];
  dataSource = new MatTableDataSource<UserModel>(this.userData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private userService: UsersService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data["users"];
      this.dataSource.data = data["users"];
    });
  }
}

export interface UserModel {
  id: number;
  userImage: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  role: string;
  age: number;
}