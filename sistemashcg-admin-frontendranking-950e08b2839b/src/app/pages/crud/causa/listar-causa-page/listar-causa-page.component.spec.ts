import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCausaPageComponent } from './listar-causa-page.component';

describe('ListarCausaPageComponent', () => {
  let component: ListarCausaPageComponent;
  let fixture: ComponentFixture<ListarCausaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCausaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCausaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
