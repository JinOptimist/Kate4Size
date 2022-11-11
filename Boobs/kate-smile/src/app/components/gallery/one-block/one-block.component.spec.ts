import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBlockComponent } from './one-block.component';

describe('OneBlockComponent', () => {
  let component: OneBlockComponent;
  let fixture: ComponentFixture<OneBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
