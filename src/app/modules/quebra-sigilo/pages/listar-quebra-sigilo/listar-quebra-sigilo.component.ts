import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuebraSigiloService } from '../../services/quebra-sigilo.service';
import * as fileSaver from 'file-saver';
import { QuebraSigiloFilter } from '../../filters/quebra-sigilo.filter';
import { QuebraSigilo } from '../../models/quebra-sigilo.model';

@Component({
  selector: 'app-listar-quebra-sigilo',
  templateUrl: './listar-quebra-sigilo.component.html',
  styleUrls: ['./listar-quebra-sigilo.component.css']
})
export class ListarQuebraSigiloComponent implements OnInit {
  public filter = new QuebraSigiloFilter()
  public items: QuebraSigilo[];
  constructor(private quebraSigiloService: QuebraSigiloService) { }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.quebraSigiloService.getAll()
      .subscribe(quebraSigiloList => {
        this.items = quebraSigiloList;
      });
  }

  // download(type): any {
  //   this.quebraSigiloService.downloadFile(type).subscribe((response: any) => {
	// 		let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
	// 		const url = window.URL.createObjectURL(blob);
  //     if(type == 'source'){
  //       fileSaver.saveAs(blob, 'QuebraSigilo_20211005_1.xlsx');
  //     }
  //     else if (type == 'result') {
  //       fileSaver.saveAs(blob, '05_10_2021.7z');
  //     }
	// 	}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
  //                () => console.info('File downloaded successfully');
  // }

}
