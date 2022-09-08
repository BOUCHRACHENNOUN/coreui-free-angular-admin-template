import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeBureautiqueComponent } from './demande-bureautique.component';

describe('DemandeBureautiqueComponent', () => {
  let component: DemandeBureautiqueComponent;
  let fixture: ComponentFixture<DemandeBureautiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeBureautiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeBureautiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
