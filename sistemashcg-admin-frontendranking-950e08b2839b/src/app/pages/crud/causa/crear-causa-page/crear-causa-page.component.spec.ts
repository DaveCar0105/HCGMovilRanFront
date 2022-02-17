import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCausaPageComponent } from './crear-causa-page.component';

describe('CrearCausaPageComponent', () => {
  let component: CrearCausaPageComponent;
  let fixture: ComponentFixture<CrearCausaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCausaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCausaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
