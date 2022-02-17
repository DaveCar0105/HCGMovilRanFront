import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRangoPageComponent } from './listar-rango-page.component';

describe('ListarRangoPageComponent', () => {
  let component: ListarRangoPageComponent;
  let fixture: ComponentFixture<ListarRangoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRangoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRangoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
