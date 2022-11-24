import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexToysCategoryComponent } from './sex-toys-category.component';

describe('SexToysCategoryComponent', () => {
  let component: SexToysCategoryComponent;
  let fixture: ComponentFixture<SexToysCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexToysCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexToysCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
