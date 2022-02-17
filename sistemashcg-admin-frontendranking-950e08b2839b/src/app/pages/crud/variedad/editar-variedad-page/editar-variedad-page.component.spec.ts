import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVariedadPageComponent } from './editar-variedad-page.component';

describe('EditarVariedadPageComponent', () => {
  let component: EditarVariedadPageComponent;
  let fixture: ComponentFixture<EditarVariedadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVariedadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVariedadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
