import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaitNameComponent } from './sait-name.component';

describe('SaitNameComponent', () => {
  let component: SaitNameComponent;
  let fixture: ComponentFixture<SaitNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaitNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaitNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
