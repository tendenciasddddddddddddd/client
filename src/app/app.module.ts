import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BibliotecasService } from './services/biblioteca.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SomosComponent } from './components/paginas/somos/somos.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './components/paginas/sesion/sesion.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';
import { LibroComponent } from './components/paginas/libro/libro.component';
import { RegistroComponent } from './components/paginas/registro/registro.component';
import { CatalogoComponent } from './components/paginas/catalogo/catalogo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' ;
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


// import { AngularFireModule } from "angularfire2";

// import { AngularFireStorageModule } from 'angularfire2/storage';




import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SomosComponent,
    SesionComponent,
    PerfilComponent,
    LibroComponent,
    RegistroComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    //AngularFireStorageModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
     BibliotecasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
