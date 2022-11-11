import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornTextComponent } from './porn-text.component';

describe('PornTextComponent', () => {
  let component: PornTextComponent;
  let fixture: ComponentFixture<PornTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PornTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PornTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
