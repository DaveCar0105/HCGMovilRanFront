import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaPageComponent } from './crear-categoria-page.component';

describe('CrearCategoriaPageComponent', () => {
  let component: CrearCategoriaPageComponent;
  let fixture: ComponentFixture<CrearCategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
