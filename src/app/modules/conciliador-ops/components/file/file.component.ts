import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileComponent implements OnInit {
  public fileForm: FormGroup;
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  
  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.fileForm = this.fb.group({
      firstAddress: [null, Validators.required],
      secondAddress: [null, Validators.required],
      firstSource: [null, Validators.required],
      secondSource: [null, Validators.required],
    });
  }



  save(form: any) {
    if (!form.valid) {
      return false;
    }
    return true;
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
}
