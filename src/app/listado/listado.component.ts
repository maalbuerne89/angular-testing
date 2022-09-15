import { Component, OnInit } from '@angular/core';
import { INoticia } from '../noticias.model';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  noticias: INoticia[] = [];
  
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.getNoticias();
    this.noticiasService.setTitle({
      title: 'ARCHIVO DE NOTICIAS',
      subtitle: 'INSTITUCIONAL'
    })
  }

  removeNoticia(id=0){
    console.log(id);
    this.noticiasService.removeNoticia(id);
    this.getNoticias();
  }

  getResumen(texto = '') {
    return texto.slice(0, 200);
  }

  getNoticias(){
    this.noticiasService.getNoticias().subscribe(
      value => {
        this.noticias = value;
      }
    );
  }
}
