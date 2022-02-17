import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClientePageComponent } from './crear-cliente-page.component';

describe('CrearClientePageComponent', () => {
  let component: CrearClientePageComponent;
  let fixture: ComponentFixture<CrearClientePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClientePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
