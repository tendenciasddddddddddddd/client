import { Component, HostBinding, OnInit } from '@angular/core';

import { IRegisterForm } from '../../../models/inicio_sesion';

import { BibliotecasService } from '../../../services/biblioteca.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})


export class SesionComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  games: any = [];

  register: IRegisterForm = {


      Correo: '',
      CONTRASENA: ''
  };


  constructor(private gameService: BibliotecasService, private router: Router) {  }

  ngOnInit(): void {


  }
  submit() {


 const valor=    this.gameService.buscarUsuario(this.register)
    .subscribe(
      res => {
        const data=res;

       this.router.navigate(['/sesion']);
        this.games = JSON.stringify(res);
      if( Object.keys(res).length === 0){
        alert('NO inicio');
        console.log(this.games);
        return;
      }
      else{

        console.log(this.games);
        localStorage.setItem("persona",JSON.stringify( this.games));
         alert('enviado');


      }



      },
      err => console.error(err)
    )
  }
}
