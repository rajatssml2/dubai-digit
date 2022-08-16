import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenLandingComponent } from './citizen-landing.component';

describe('CitizenLandingComponent', () => {
  let component: CitizenLandingComponent;
  let fixture: ComponentFixture<CitizenLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
