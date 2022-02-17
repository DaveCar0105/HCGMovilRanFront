import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormularioPageComponent } from './listar-formulario-page.component';

describe('ListarFormularioPageComponent', () => {
  let component: ListarFormularioPageComponent;
  let fixture: ComponentFixture<ListarFormularioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFormularioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFormularioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
