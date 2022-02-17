import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormularioPageComponent } from './ver-formulario-page.component';

describe('VerFormularioPageComponent', () => {
  let component: VerFormularioPageComponent;
  let fixture: ComponentFixture<VerFormularioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFormularioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFormularioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
