import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPostcosechaPageComponent } from './editar-postcosecha-page.component';

describe('EditarPostcosechaPageComponent', () => {
  let component: EditarPostcosechaPageComponent;
  let fixture: ComponentFixture<EditarPostcosechaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPostcosechaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPostcosechaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
