import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoCajaPageComponent } from './editar-tipo-caja-page.component';

describe('EditarTipoCajaPageComponent', () => {
  let component: EditarTipoCajaPageComponent;
  let fixture: ComponentFixture<EditarTipoCajaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipoCajaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoCajaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
