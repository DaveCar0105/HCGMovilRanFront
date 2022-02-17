import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoPageComponent } from './listar-producto-page.component';

describe('ListarProductoPageComponent', () => {
  let component: ListarProductoPageComponent;
  let fixture: ComponentFixture<ListarProductoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProductoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
