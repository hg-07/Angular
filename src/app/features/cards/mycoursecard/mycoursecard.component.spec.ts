import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursecardComponent } from './mycoursecard.component';

describe('MycoursecardComponent', () => {
  let component: MycoursecardComponent;
  let fixture: ComponentFixture<MycoursecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycoursecardComponent]
    });
    fixture = TestBed.createComponent(MycoursecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
