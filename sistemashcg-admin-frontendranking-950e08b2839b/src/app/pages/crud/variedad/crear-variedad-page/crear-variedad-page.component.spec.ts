import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVariedadPageComponent } from './crear-variedad-page.component';

describe('CrearVariedadPageComponent', () => {
  let component: CrearVariedadPageComponent;
  let fixture: ComponentFixture<CrearVariedadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVariedadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVariedadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
