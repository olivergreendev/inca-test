import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ComputersService } from '../services/computers.service';

@Component({
  selector: 'app-computer-data',
  templateUrl: './computer-data.component.html',
  styleUrls: ['./computer-data.component.scss']
})
export class ComputerDataComponent implements AfterViewInit {

  displayedColumns: string[] = ['userID', 'ip', 'computerName', 'adminUsername', 'adminKey', 'active', 'runtime'];
  computerData: ComputerModel[] = [];
  dataSource = new MatTableDataSource<ComputerModel>(this.computerData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private computerService: ComputersService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.computerService.getComputerData().subscribe(data => {
      this.computerData = data["computers"];
      this.dataSource.data = data["computers"];
    });
  }

  toggleAdminKey(elementID: number) {
    window.alert(elementID);
  }
}

export interface ComputerModel {
  userID: number;
  ip: string;
  computerName: string;
  adminUsername: string;
  adminKey: string;
  active: boolean;
  runtime: number;
}