import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVariedadPageComponent } from './listar-variedad-page.component';

describe('ListarVariedadPageComponent', () => {
  let component: ListarVariedadPageComponent;
  let fixture: ComponentFixture<ListarVariedadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVariedadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVariedadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
