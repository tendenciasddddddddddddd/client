import { Component, OnInit, HostBinding } from '@angular/core';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Busqueda } from '../../../models/busqueda';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  isLoads: boolean = false;
  libro: any = [];
  busqueda: Busqueda = {
    Nombre: '',
  };

  libss: any[] = [
    //  {id: 1, name:'Zorro',imagen:'./assets/img/animales/zorro.jpg',descripcion: 'Mamifero '},
    {
      id: 2,
      name: 'El Señor de los Anillos (J.R.R. Tolkien)',
      imagen: './assets/img/1.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
    {
      id: 3,
      name: 'El Alquimista',
      imagen: './assets/img/2.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
    {
      id: 4,
      name: 'Código Da Vinci',
      imagen: './assets/img/3.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },

    {
      id: 5,
      name: 'Crepúsculo – La saga (de Stephenie Meyer)',
      imagen: './assets/img/4.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
    {
      id: 6,
      name: 'Lo que el viento se llevó (de Margaret Mitchell)',
      imagen: './assets/img/5.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
    {
      id: 7,
      name: 'Para Leer al anochecer (de Charles Dickens)',
      imagen: './assets/img/6.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
    {
      id: 8,
      name: 'La historia del loco (de John Katzenbach).',
      imagen: './assets/img/7.jpg',
      fecha: '26 febrero 2020 - 1:32 am',
    },
  ];
  filteredData: any[] =[
    {id: null, name:'', img:'', fecha: '', categoria: '',editora: ''}
  ];
  filteredData2 :any =[];
  form: FormGroup;
  constructor(
    private gameService: BibliotecasService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      buscar: [null,],
      editor: ['', ],
      genero: ['', ],
    });
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      buscar: [''],
      editor: ['', ],
      genero: ['', ],
    });
    this.getData();
  }
  getData(){
    this.isLoads = true;
    this.gameService.listBooks()
    .subscribe(
      res => {
        let data:any =res;
        for (let i = 1; i < data.length; i++) {
          console.log(data[i]);
          this.filteredData.push({id: data[i].COD_DOCUMENTO, name: data[i].TITULO, img: data[i].img, fecha: data[i].ANO, categoria: data[i].CATEGORIAS, editora: data[i].NOMBRE_EDITORIAL})
        }
         

        console.log('es',this.filteredData)

        this.isLoads = false;
      },

    )
  }
  submit() {
    let nombre= this.form.value.buscar;
    let editor = this.form.value.editor;
    let genero = this.form.value.genero;
    if (nombre != '' || editor!= '' || genero!= '') {
     
      if (editor) {
        this.form.value.buscar= ''
        this.filteredData2 = this.filteredData.filter((item) => {
     
          return item.editora.toLowerCase().includes(editor.toLowerCase());
        });
      }else if(genero){
        this.filteredData2 = this.filteredData.filter((item) => {
     
          return item.categoria.toLowerCase().includes(genero.toLowerCase());
        });
      } else if(nombre){
        this.filteredData2 = this.filteredData.filter((item) => {
     
          return item.name.toLowerCase().includes(nombre.toLowerCase());
        });
      }
     
      // this.busqueda.Nombre= nombre;
      // this.gameService.Buscar(this.busqueda)
      // .subscribe(
      //   res =>{
      //      console.log(res)
      //   }
      // )
    } else {
      alert("Ingrese el libro que quiere mirar en los campos")
    }
    
  }
  searchData(searchValue: any) {
    this.filteredData = this.libss.filter((item) => {
     
      return item.sensor.toLowerCase().includes(searchValue.toLowerCase());
    });
}
}
