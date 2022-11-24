import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexArtComponent } from './sex-art.component';

describe('SexArtComponent', () => {
  let component: SexArtComponent;
  let fixture: ComponentFixture<SexArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
