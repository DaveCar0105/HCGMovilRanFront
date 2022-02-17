import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSubcategoriaPageComponent } from './crear-subcategoria-page.component';

describe('CrearSubcategoriaPageComponent', () => {
  let component: CrearSubcategoriaPageComponent;
  let fixture: ComponentFixture<CrearSubcategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSubcategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSubcategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
