import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRangoPageComponent } from './editar-rango-page.component';

describe('EditarRangoPageComponent', () => {
  let component: EditarRangoPageComponent;
  let fixture: ComponentFixture<EditarRangoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRangoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRangoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
