import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormularioPageComponent } from './crear-formulario-page.component';

describe('CrearFormularioPageComponent', () => {
  let component: CrearFormularioPageComponent;
  let fixture: ComponentFixture<CrearFormularioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormularioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormularioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
