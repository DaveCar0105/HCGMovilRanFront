import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostcosechaPageComponent } from './listar-postcosecha-page.component';

describe('ListarPostcosechaPageComponent', () => {
  let component: ListarPostcosechaPageComponent;
  let fixture: ComponentFixture<ListarPostcosechaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPostcosechaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPostcosechaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
