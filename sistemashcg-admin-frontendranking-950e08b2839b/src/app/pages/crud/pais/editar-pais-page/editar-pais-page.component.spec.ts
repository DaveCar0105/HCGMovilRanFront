import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPaisPageComponent } from './editar-pais-page.component';

describe('EditarPaisPageComponent', () => {
  let component: EditarPaisPageComponent;
  let fixture: ComponentFixture<EditarPaisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPaisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
