import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCargueraPageComponent } from './editar-carguera-page.component';

describe('EditarCargueraPageComponent', () => {
  let component: EditarCargueraPageComponent;
  let fixture: ComponentFixture<EditarCargueraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCargueraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCargueraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
