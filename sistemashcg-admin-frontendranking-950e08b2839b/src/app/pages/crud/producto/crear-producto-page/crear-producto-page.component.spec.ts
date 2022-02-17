import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoPageComponent } from './crear-producto-page.component';

describe('CrearProductoPageComponent', () => {
  let component: CrearProductoPageComponent;
  let fixture: ComponentFixture<CrearProductoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
