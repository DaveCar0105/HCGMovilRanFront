import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSubcategoriaPageComponent } from './listar-subcategoria-page.component';

describe('ListarSubcategoriaPageComponent', () => {
  let component: ListarSubcategoriaPageComponent;
  let fixture: ComponentFixture<ListarSubcategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSubcategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSubcategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
