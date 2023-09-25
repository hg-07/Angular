import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthinterceptorComponent } from './authinterceptor.component';

describe('AuthinterceptorComponent', () => {
  let component: AuthinterceptorComponent;
  let fixture: ComponentFixture<AuthinterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthinterceptorComponent]
    });
    fixture = TestBed.createComponent(AuthinterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
