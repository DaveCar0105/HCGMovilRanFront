import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPaisPageComponent } from './crear-pais-page.component';

describe('CrearPaisPageComponent', () => {
  let component: CrearPaisPageComponent;
  let fixture: ComponentFixture<CrearPaisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPaisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
