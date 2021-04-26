import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeheaderComponent } from './employeeheader.component';

describe('EmployeeheaderComponent', () => {
  let component: EmployeeheaderComponent;
  let fixture: ComponentFixture<EmployeeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
