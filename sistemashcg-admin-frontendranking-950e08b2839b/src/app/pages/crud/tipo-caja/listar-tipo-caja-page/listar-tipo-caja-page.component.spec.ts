import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCajaPageComponent } from './listar-tipo-caja-page.component';

describe('ListarTipoCajaPageComponent', () => {
  let component: ListarTipoCajaPageComponent;
  let fixture: ComponentFixture<ListarTipoCajaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoCajaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoCajaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
