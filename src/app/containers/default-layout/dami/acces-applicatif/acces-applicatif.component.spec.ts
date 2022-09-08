import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesApplicatifComponent } from './acces-applicatif.component';

describe('AccesApplicatifComponent', () => {
  let component: AccesApplicatifComponent;
  let fixture: ComponentFixture<AccesApplicatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesApplicatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesApplicatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
