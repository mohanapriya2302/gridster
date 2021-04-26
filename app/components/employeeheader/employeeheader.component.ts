import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeeheader',
  templateUrl: './employeeheader.component.html',
  styleUrls: ['./employeeheader.component.css']
})
export class EmployeeheaderComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

}
