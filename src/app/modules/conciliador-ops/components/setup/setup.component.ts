import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SetupComponent implements OnInit {
  public border_validation = false;
  public setupForm: FormGroup;
  public title: string = "setup page"
  public form: any;
  constructor(private route: Router, private fb: FormBuilder) {
    this.createForm();
  }

  //create form
  createForm() {
    this.setupForm = this.fb.group({
      modelName: [null, [Validators.required, Validators.pattern(/^[A-z]*$/)]],
      status: [null, [Validators.required]]
    });
  }

  save(form: any) {
    if (!form.valid) {
      return false;
    }
    return true;
  }

  ngOnInit() {  }

}
