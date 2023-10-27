import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedweatherComponent } from './detailedweather.component';

describe('DetailedweatherComponent', () => {
  let component: DetailedweatherComponent;
  let fixture: ComponentFixture<DetailedweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedweatherComponent]
    });
    fixture = TestBed.createComponent(DetailedweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
