import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbbComponent } from './rbb.component';

describe('RbbComponent', () => {
  let component: RbbComponent;
  let fixture: ComponentFixture<RbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
