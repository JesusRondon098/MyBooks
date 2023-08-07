import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisteComponent } from './form-registe.component';

describe('FormRegisteComponent', () => {
  let component: FormRegisteComponent;
  let fixture: ComponentFixture<FormRegisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisteComponent]
    });
    fixture = TestBed.createComponent(FormRegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
