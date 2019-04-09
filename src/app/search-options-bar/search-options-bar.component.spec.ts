import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionsBarComponent } from './search-options-bar.component';

describe('SearchOptionsBarComponent', () => {
  let component: SearchOptionsBarComponent;
  let fixture: ComponentFixture<SearchOptionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOptionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
