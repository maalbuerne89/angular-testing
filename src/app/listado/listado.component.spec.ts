import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NoticiasService } from '../noticias.service';

import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]), 
        HttpClientTestingModule,
      ],
      declarations: [ ListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se elimina primer elemento del listado', () => {
    const fixture = TestBed.createComponent(ListadoComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.getNoticias();
    const cantInicial = app.noticias.length;
    const primeraNoticiaId = app.noticias[0].id;
    const btnEliminar = fixture.debugElement.query(By.css(`a#eliminar${primeraNoticiaId}`));
    btnEliminar.nativeElement.click();
    expect(app.noticias.length === cantInicial - 1).toBeTrue();
  });

  it('Se cargan en memoria las noticias', () => {
    const fixture = TestBed.createComponent(ListadoComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.noticias = [];
    app.getNoticias();
    expect(app.noticias.length > 0).toBeTrue();
  });
});
