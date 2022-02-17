import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioPageComponent } from './listar-usuario-page.component';

describe('ListarUsuarioPageComponent', () => {
  let component: ListarUsuarioPageComponent;
  let fixture: ComponentFixture<ListarUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
