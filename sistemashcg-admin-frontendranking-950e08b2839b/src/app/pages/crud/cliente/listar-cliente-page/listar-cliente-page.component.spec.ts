import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientePageComponent } from './listar-cliente-page.component';

describe('ListarClientePageComponent', () => {
  let component: ListarClientePageComponent;
  let fixture: ComponentFixture<ListarClientePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClientePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
