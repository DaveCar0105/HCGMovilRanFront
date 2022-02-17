import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioPageComponent } from './crear-usuario-page.component';

describe('CrearUsuarioPageComponent', () => {
  let component: CrearUsuarioPageComponent;
  let fixture: ComponentFixture<CrearUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
