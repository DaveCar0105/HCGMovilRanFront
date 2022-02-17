import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemPageComponent } from './editar-item-page.component';

describe('EditarItemPageComponent', () => {
  let component: EditarItemPageComponent;
  let fixture: ComponentFixture<EditarItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
