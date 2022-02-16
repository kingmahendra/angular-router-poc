import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RzbComponent } from './rzb.component';

describe('RzbComponent', () => {
  let component: RzbComponent;
  let fixture: ComponentFixture<RzbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RzbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RzbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
