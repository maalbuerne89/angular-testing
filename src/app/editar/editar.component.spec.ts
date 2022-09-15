import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ListadoComponent } from '../listado/listado.component';

import { EditarComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]), 
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ EditarComponent, ListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario inválido', () => {
    const fixture = TestBed.createComponent(EditarComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.noticiaForm;
    const descripcion = form.controls['descripcion'];
    descripcion.setValue('');
    expect(form.invalid).toBeTrue();
  });

  it('Debe retornar formulario válido', () => {
    const fixture = TestBed.createComponent(EditarComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.noticiaForm;
    const descripcion = form.controls['descripcion'];
    descripcion.setValue('Ya está disponible en todos los locales de Hoy Juega la nueva Raspadita Car One que regala cinco autos.');
    expect(form.invalid).toBeFalse();
  });


});
