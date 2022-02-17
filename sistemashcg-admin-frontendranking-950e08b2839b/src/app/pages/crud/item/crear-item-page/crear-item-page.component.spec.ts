import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearItemPageComponent } from './crear-item-page.component';

describe('CrearItemPageComponent', () => {
  let component: CrearItemPageComponent;
  let fixture: ComponentFixture<CrearItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
