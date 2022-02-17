import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCategoriaPageComponent } from './listar-categoria-page.component';

describe('ListarCategoriaPageComponent', () => {
  let component: ListarCategoriaPageComponent;
  let fixture: ComponentFixture<ListarCategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
