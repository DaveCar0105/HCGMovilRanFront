import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRangoPageComponent } from './crear-rango-page.component';

describe('CrearRangoPageComponent', () => {
  let component: CrearRangoPageComponent;
  let fixture: ComponentFixture<CrearRangoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRangoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRangoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
