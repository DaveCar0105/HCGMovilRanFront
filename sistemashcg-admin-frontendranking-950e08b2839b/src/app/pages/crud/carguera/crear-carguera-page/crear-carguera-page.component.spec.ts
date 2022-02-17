import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCargueraPageComponent } from './crear-carguera-page.component';

describe('CrearCargueraPageComponent', () => {
  let component: CrearCargueraPageComponent;
  let fixture: ComponentFixture<CrearCargueraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCargueraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCargueraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
