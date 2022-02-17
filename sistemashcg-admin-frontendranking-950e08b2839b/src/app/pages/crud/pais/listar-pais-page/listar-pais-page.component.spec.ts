import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaisPageComponent } from './listar-pais-page.component';

describe('ListarPaisPageComponent', () => {
  let component: ListarPaisPageComponent;
  let fixture: ComponentFixture<ListarPaisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPaisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
