import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropzoneComponent, DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { ToastrService } from 'ngx-toastr';
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-novo-quebra-sigilo',
  templateUrl: './novo-quebra-sigilo.component.html',
  styleUrls: ['./novo-quebra-sigilo.component.css']
})
export class NovoQuebraSigiloComponent implements OnInit {
  public processForm: FormGroup;
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  constructor(private router: Router, private fb: FormBuilder, private toastrService: ToastrService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.processForm = this.fb.group({
      emails: [null, Validators.required]
    });
  }

  execute(form: any) {
    if (!form.valid) {
      return false;
    }

    Swal.fire({
      type: 'success',
      title: 'Success',
      icon: 'success',
      text: 'Enviado para a fila de processamento!',
      showConfirmButton: true,
    }).then((result) => {
      setTimeout(() => {
        this.toastrService.success('Quebra de Sigilo #123456 finalizado!', 'Sucesso!');
      }, 5000);
  
      this.router.navigate(['/quebra-sigilo'])
    });


   
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
