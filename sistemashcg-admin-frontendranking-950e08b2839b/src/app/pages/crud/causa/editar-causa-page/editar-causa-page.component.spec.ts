import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCausaPageComponent } from './editar-causa-page.component';

describe('EditarCausaPageComponent', () => {
  let component: EditarCausaPageComponent;
  let fixture: ComponentFixture<EditarCausaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCausaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCausaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
