import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() persona;
  @Output() enviar = new EventEmitter<string>();

  mensaje = "Mensaje del hijo";

  constructor() { }

  ngOnInit() {
  }

  ejecutarEvento(){
    this.enviar.emit(this.mensaje);
  }


}
