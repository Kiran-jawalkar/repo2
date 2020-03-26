import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserComponent } from './add-edit-user.component';
import { RouterTestingModule } from "@angular/router/testing";

import { ReactiveFormsModule } from '@angular/forms';
describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUserComponent],
      imports:[ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
});

  function setFormValues(fromData) {
    component.registerForm.controls['fullName'].setValue(fromData.fullName);
    component.registerForm.controls['phone'].setValue(fromData.phone);
    component.registerForm.controls['email'].setValue(fromData.email);
    component.registerForm.controls['gender'].setValue(fromData.gender);
   }

   it('should have form valid', () => {
    //component.constructor();
    const data = {
      fullName:'Kiran',
      phone:'1234567896',
      email: 'xyz@abc.com',
      gender: 'female'
    };
    setFormValues(data);
    expect(component.registerForm.valid).toBeFalsy();
   })

   it('should have phone number', ()=> {
   // component.constructor();
    const data = {
      fullName:'Kiran',
      phone:'1234567896',
      email: 'xyz@abc.com',
      gender: 'female'
    };
    setFormValues(data);
    expect(component.registerForm.get('phone').value.length).toBeGreaterThan(0);
    expect(component.registerForm.get('phone').value.length).toBeLessThanOrEqual(10);
   })

   
});
