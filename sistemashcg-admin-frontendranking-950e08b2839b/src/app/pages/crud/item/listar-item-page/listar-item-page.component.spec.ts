import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemPageComponent } from './listar-item-page.component';

describe('ListarItemPageComponent', () => {
  let component: ListarItemPageComponent;
  let fixture: ComponentFixture<ListarItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
