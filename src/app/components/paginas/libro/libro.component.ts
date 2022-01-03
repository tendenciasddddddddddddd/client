import { Component, OnInit } from '@angular/core';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Busqueda } from '../../../models/busqueda';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AngularFireStorage } from 'angularfire2/storage';

//import { AngularFireStorage } from 'angularfire2/storage';

import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  filteredData2 :any =[];
  lisAutor : any = [];
  lisCat : any = [];
  lisEdit : any = [];
  isLoads: boolean = false;
  isAutor: boolean = false;
  isCategoria: boolean = false;
  isEditor: boolean = false;
  isUploading: boolean = false;
  valorImagen: String='';
  form: FormGroup;

  
  fb: String='';
  downloadURL!: Observable<string>;

  constructor(
    private gameService: BibliotecasService,
    private router: Router,
    private formBuilder: FormBuilder,
   //private storage: AngularFireStorage,
   
  ) { 
    this.form = formBuilder.group({
      ID_AUTORES: [0,],
      ID_CATEGORIAS: ['', ],
      ID_EDITORIALES: ['', ],
      TITULO: ['', ],
      ANO: ['', ],
      img: ['', ],
    });
   
  }

  ngOnInit(): void {
    this.getData();
    this.getAuthor();
    this.getCategory();
    this.getEditor();
  }
  getData(){
    this.isLoads = true;
    this.gameService.listBooks()
    .subscribe(
      res => {
        let data:any =res;
        for (let i = 1; i < data.length; i++) {
          this.filteredData2.push({id: data[i].COD_DOCUMENTO, name: data[i].TITULO, img: data[i].img, fecha: data[i].ANO, categoria: data[i].CATEGORIAS, editora: data[i].NOMBRE_EDITORIAL})
        }
        //console.log('es',this.filteredData2)

        this.isLoads = false;
      },

    )
  }
  getAuthor(){
    this.isAutor= true;
     this.gameService.listAuthors()
     .subscribe(res => {
       this.lisAutor = res;
       this.isAutor= false;
     })
  }
  getCategory(){
    this.isCategoria= true;
    this.gameService.listCategory()
    .subscribe(res => {
      this.lisCat = res;
      console.log(this.lisCat);
      this.isCategoria= false;
    })
 }
 getEditor(){
  this.isEditor= true;
  this.gameService.listEditor()
  .subscribe(res => {
    this.lisEdit = res;
    console.log(this.lisEdit);
    this.isEditor= false;
  })
}
  submit() {
    let nombre= this.form.value.ID_AUTORES;
    let editor = this.form.value.ID_CATEGORIAS;
    let genero = this.form.value.ID_EDITORIALES;
   
  }

  // onFileSelected(event: any = null) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe((url:any) => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }



  onFileChanged(event: any = null) {
    this.isUploading = true;
    //this.doUpload(event.target.files[0], false);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      
      this. cargarimagenServer(file);
      console.log(file.name);
      
    }
  }
  cargarimagenServer(file: any){
  
    this.gameService.uploadFile(file).subscribe(
      (response :any) => {
        setTimeout(() => {
          this.valorImagen= response;
          console.log(this.valorImagen)
        }, 1000);
        
      },
      error => {
        console.log(error);
        this.isUploading = false;
      }
    );
  }
}
