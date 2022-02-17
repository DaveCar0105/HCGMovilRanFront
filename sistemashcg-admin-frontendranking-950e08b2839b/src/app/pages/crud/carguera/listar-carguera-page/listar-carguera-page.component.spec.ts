import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCargueraPageComponent } from './listar-carguera-page.component';

describe('ListarCargueraPageComponent', () => {
  let component: ListarCargueraPageComponent;
  let fixture: ComponentFixture<ListarCargueraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCargueraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCargueraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
