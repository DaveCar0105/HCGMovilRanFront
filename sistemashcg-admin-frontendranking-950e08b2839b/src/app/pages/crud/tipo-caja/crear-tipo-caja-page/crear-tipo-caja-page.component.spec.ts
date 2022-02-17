import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoCajaPageComponent } from './crear-tipo-caja-page.component';

describe('CrearTipoCajaPageComponent', () => {
  let component: CrearTipoCajaPageComponent;
  let fixture: ComponentFixture<CrearTipoCajaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipoCajaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoCajaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
