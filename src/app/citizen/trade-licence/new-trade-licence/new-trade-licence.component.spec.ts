import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTradeLicenceComponent } from './new-trade-licence.component';

describe('NewTradeLicenceComponent', () => {
  let component: NewTradeLicenceComponent;
  let fixture: ComponentFixture<NewTradeLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTradeLicenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTradeLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
