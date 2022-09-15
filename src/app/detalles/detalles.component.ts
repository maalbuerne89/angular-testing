import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INoticia } from '../noticias.model';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  noticia: any;
  constructor(
    private noticiasService: NoticiasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.noticiasService.getNoticiaById(this.route.snapshot.params['id']).subscribe(value => {
      console.log('noticia', value)
      this.noticia = value;
    });

    // console.log(this.route.snapshot.params['id']);
    if( this.noticia )
      this.noticiasService.setTitle({
        title: this.noticia.titulo,
        subtitle: this.noticia.subtitulo
      })
  }
}
