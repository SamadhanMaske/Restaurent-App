import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestaurentComponent } from './login-restaurent.component';

describe('LoginRestaurentComponent', () => {
  let component: LoginRestaurentComponent;
  let fixture: ComponentFixture<LoginRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRestaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
