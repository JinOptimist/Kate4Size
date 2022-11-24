import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexToysComponent } from './sex-toys.component';

describe('SexToysComponent', () => {
  let component: SexToysComponent;
  let fixture: ComponentFixture<SexToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
