import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDataComponent } from './computer-data.component';

describe('ComputerDataComponent', () => {
  let component: ComputerDataComponent;
  let fixture: ComponentFixture<ComputerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
