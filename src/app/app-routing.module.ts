import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'noticias',
    component: ListadoComponent,
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
  },  
  {
    path: 'detalles/:id',
    component: DetallesComponent,
  },  
  {
    path: '**',
    redirectTo: 'noticias',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
