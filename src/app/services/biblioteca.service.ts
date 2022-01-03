import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders , HttpEvent, HttpResponse ,HttpRequest } from'@angular/common/http';
import { Comentario } from '../models/somos';
import { IRegisterForm } from '../models/inicio_sesion';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';
import { Busqueda } from '../models/busqueda';
@Injectable({
  providedIn: 'root'
})
export class BibliotecasService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  API_URI = 'http://localhost:3000/api';
  private apiUploadUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUploadUrl = 'http://localhost:3000/api/books/files';
  }


  saveComentario(comentario:Comentario) {

    return this.http.post(`${this.API_URI}/Biblioteca/comentario`,comentario);

  }

  buscarUsuario(register: IRegisterForm) {

    return this.http.post(`${this.API_URI}/Biblioteca/sesion`,register);

  }
  Guardar(registro: Registro) {

    return this.http.post(`${this.API_URI}/Biblioteca/registro`,registro);

  }
  Buscar(busqueda: Busqueda) {

    return this.http.post(`${this.API_URI}/Biblioteca/Buscar`,busqueda);

  }
  listBooks() {

    return this.http.get(`${this.API_URI}/Biblioteca/books`);

  }
  listAuthors() {

    return this.http.get(`${this.API_URI}/books/authors`);

  }
  listCategory() {

    return this.http.get(`${this.API_URI}/books/category`);

  }
  listEditor() {

    return this.http.get(`${this.API_URI}/books/editor`);

  }
  public uploadFile(file: Blob): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('myFile', file);
  
    return this.http.request(new HttpRequest(
      'POST',
      this.apiUploadUrl,
      formData,
      {
        reportProgress: true
      }));
  }

}





