import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornCategoriesComponent } from './porn-categories.component';

describe('PornCategoriesComponent', () => {
  let component: PornCategoriesComponent;
  let fixture: ComponentFixture<PornCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PornCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PornCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
