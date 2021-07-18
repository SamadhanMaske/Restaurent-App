import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestaurentComponent } from './register-restaurent.component';

describe('RegisterRestaurentComponent', () => {
  let component: RegisterRestaurentComponent;
  let fixture: ComponentFixture<RegisterRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRestaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
