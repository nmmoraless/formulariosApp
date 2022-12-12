import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  public initForm: any = {
    producto: 'Televisor 32"',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  public nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  public precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0
  }

  public validarExistencias(): boolean {
    return this.miFormulario?.controls['existencias']?.errors && this.miFormulario?.controls['existencias']?.touched ? true : false;
  }

  public guardarFormulario(){
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }


}
