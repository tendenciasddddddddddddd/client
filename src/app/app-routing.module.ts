import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomosComponent } from './components/paginas/somos/somos.component';
import { SesionComponent } from './components/paginas/sesion/sesion.component';
import { RegistroComponent } from './components/paginas/registro/registro.component';
import { CatalogoComponent } from './components/paginas/catalogo/catalogo.component';
import { LibroComponent } from './components/paginas/libro/libro.component';
const routes: Routes = [
  { path: 'Biblioteca', component: SomosComponent },
  { path: 'Sesion', component: SesionComponent },
  { path: 'Registro', component: RegistroComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'libro', component: LibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
