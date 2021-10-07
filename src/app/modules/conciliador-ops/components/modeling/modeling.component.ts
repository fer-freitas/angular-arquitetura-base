import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeling',
  templateUrl: './modeling.component.html',
  styleUrls: ['./modeling.component.scss']
})

export class ModelingComponent implements OnInit {
  public modelingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.modelingForm = this.fb.group({
      identifiers: [null, Validators.required],
      values: [null, Validators.required]
    });
  }

  save(form: any) {
    if (!form.valid) {
      return false;
    }
    return true;
  }
}
