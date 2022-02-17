import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRangoPageComponent } from './item-rango-page.component';

describe('ItemRangoPageComponent', () => {
  let component: ItemRangoPageComponent;
  let fixture: ComponentFixture<ItemRangoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRangoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRangoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
