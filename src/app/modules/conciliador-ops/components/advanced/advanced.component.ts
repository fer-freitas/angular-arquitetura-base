import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './mustMatch';

declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdvancedComponent implements OnInit {
  public advancedForm: FormGroup;
  public form: any;
  public submitted = false;
  constructor(private route: Router, private fb: FormBuilder) {
    this.createAdvancedForm();
  }

  createAdvancedForm() {
    this.advancedForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      timeZone: ['', Validators.required],
      repetition: ['', Validators.required],
      emails: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.advancedForm.valid) {
      return false;
    }
    return true;
  }

  success() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your all steps done!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnInit() {  }

}
