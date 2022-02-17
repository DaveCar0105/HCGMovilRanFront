import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubcategoriaPageComponent } from './editar-subcategoria-page.component';

describe('EditarSubcategoriaPageComponent', () => {
  let component: EditarSubcategoriaPageComponent;
  let fixture: ComponentFixture<EditarSubcategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubcategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSubcategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
