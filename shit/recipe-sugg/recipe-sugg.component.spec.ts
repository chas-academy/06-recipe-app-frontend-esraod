import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSuggComponent } from './recipe-sugg.component';

describe('RecipeSuggComponent', () => {
  let component: RecipeSuggComponent;
  let fixture: ComponentFixture<RecipeSuggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSuggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
