import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios(){
    return [
      {
        "nombre" : "Luis Salinas",
        "edad" : 20,
        "hobby" : 'cantar'
      },
      {
        "nombre" : "Carlos Morazan",
        "edad" : 30,
        "hobby" : 'bailar'
      },
      {
        "nombre" : "Maria Gomez",
        "edad" : 40,
        "hobby" : 'escribir'
      }
    ];
  }
}
