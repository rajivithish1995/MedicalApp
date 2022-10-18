import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  myForm!: FormGroup;
  submitted:boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log('actual', form);
    if (this.myForm.valid) {
      console.log('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
