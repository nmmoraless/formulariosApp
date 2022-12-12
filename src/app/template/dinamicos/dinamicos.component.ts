import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('dinamicos') dinamicos!: NgForm;
  
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Juan García',
    favoritos: [
      {id: 1, nombre: 'Metal slug'},
      {id: 2, nombre: 'Contra 2'}
    ]
  }

  public guardar(): void{
    console.log('Formulario enviado');
  }
  
  public agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push ( {...nuevoFavorito} );
    this.nuevoJuego = '';
  }
  public eliminar(pos: number){
    this.persona.favoritos.splice(pos, 1);
  }

  public campoInvalido(): boolean{
    return this.dinamicos?.controls['nombre']?.invalid && this.dinamicos?.controls['nombre']?.touched;
  }
}
