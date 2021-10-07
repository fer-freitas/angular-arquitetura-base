import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-editar-conciliador-ops',
  templateUrl: './editar-conciliador-ops.component.html',
  styleUrls: ['./editar-conciliador-ops.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarConciliadorOpsComponent implements OnInit {

  @Input() formData;
  constructor() { }

  ngOnInit(): void {
  }

}
