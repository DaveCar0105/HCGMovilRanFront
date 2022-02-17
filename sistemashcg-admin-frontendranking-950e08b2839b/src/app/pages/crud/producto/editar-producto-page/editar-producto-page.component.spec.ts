import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoPageComponent } from './editar-producto-page.component';

describe('EditarProductoPageComponent', () => {
  let component: EditarProductoPageComponent;
  let fixture: ComponentFixture<EditarProductoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProductoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
