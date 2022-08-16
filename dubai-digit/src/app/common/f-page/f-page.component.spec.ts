import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPageComponent } from './f-page.component';

describe('FPageComponent', () => {
  let component: FPageComponent;
  let fixture: ComponentFixture<FPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
