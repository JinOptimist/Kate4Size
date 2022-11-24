import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdultsBoxComponent } from './for-adults-box.component';

describe('ForAdultsBoxComponent', () => {
  let component: ForAdultsBoxComponent;
  let fixture: ComponentFixture<ForAdultsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForAdultsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForAdultsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
