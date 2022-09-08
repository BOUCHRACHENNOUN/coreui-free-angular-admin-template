import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMaterialComponent } from './demande-material.component';

describe('DemandeMaterialComponent', () => {
  let component: DemandeMaterialComponent;
  let fixture: ComponentFixture<DemandeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
