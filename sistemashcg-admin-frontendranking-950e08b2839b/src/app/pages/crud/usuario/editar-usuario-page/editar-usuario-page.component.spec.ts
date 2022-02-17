import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioPageComponent } from './editar-usuario-page.component';

describe('EditarUsuarioPageComponent', () => {
  let component: EditarUsuarioPageComponent;
  let fixture: ComponentFixture<EditarUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
