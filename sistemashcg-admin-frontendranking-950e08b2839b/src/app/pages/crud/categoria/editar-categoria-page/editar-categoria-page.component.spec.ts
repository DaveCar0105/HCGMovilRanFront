import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoriaPageComponent } from './editar-categoria-page.component';

describe('EditarCategoriaPageComponent', () => {
  let component: EditarCategoriaPageComponent;
  let fixture: ComponentFixture<EditarCategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
