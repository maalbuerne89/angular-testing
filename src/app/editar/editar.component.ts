import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  noticiaForm: FormGroup;
  noticia: any;

  constructor(
    private noticiasService: NoticiasService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.noticiaForm = this.formBuilder.group({
      descripcion: [this.noticia?.content, [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log('edit');
    this.noticiasService.getNoticiaById(this.route.snapshot.params['id']).subscribe(value => {
      this.noticia = value;
      this.noticiaForm.get('descripcion')?.setValue(this.noticia.content);
    });

    this.noticiasService.setTitle({
      title: this.noticia?.titulo,
      subtitle: 'Editar'
    });
  }

  onCancel(){
    this.router.navigateByUrl('/noticias');
  }

  onSubmit(value: any){
    this.noticia.content = value.descripcion;
    this.noticiasService.setNoticia(this.noticia);
    this.router.navigateByUrl('/noticias');
  }
}
