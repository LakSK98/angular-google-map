import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGoogleComponent } from './location-google.component';

describe('LocationGoogleComponent', () => {
  let component: LocationGoogleComponent;
  let fixture: ComponentFixture<LocationGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
