import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPostcosechaPageComponent } from './crear-postcosecha-page.component';

describe('CrearPostcosechaPageComponent', () => {
  let component: CrearPostcosechaPageComponent;
  let fixture: ComponentFixture<CrearPostcosechaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPostcosechaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPostcosechaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
