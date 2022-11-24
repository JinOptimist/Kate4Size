import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveArrayComponent } from './active-array.component';

describe('ActiveArrayComponent', () => {
  let component: ActiveArrayComponent;
  let fixture: ComponentFixture<ActiveArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
