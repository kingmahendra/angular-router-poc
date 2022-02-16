import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvbComponent } from './ivb.component';

describe('IvbComponent', () => {
  let component: IvbComponent;
  let fixture: ComponentFixture<IvbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
