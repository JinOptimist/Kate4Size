import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornCategoryComponent } from './porn-category.component';

describe('PornCategoryComponent', () => {
  let component: PornCategoryComponent;
  let fixture: ComponentFixture<PornCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PornCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PornCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
