import { Component } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luis';

  estadoClase = true;

  isActive = false;

  persona = {
    nombre: 'Luis',
    edad: 45
  };

  info = "";

  personas: any = [];

  constructor(private usuarioservice : UsuarioService){
      this.personas = usuarioservice.getUsuarios();
  }

  getNombre () {
    return this.nombre;
  }

  save(e){
    console.log(e);
  }

  onKeyUp(usuario){

    console.log(usuario);

  }

  getMensaje(e){
    alert(e);

    this.info = e;
  }


}
