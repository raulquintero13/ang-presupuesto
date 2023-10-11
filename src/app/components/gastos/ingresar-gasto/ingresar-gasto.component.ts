import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {

nombreGasto: String;
cantidad: number;
formularioIncorrecto: boolean;
textoIncorrecto: string;

constructor(private _presupuestoService: PresupuestoService) {
  this.nombreGasto = "";
  this.cantidad =0;
  this.formularioIncorrecto = false;
  this.textoIncorrecto = "Nombre Gasto o cantidad Incorrecta";

}

agregarGasto() {
  if (this.cantidad > this._presupuestoService.restante){
    this.formularioIncorrecto = true;
    this.textoIncorrecto = "Cantidad ingresada es mayor al restante";
    return;
  }
  if(this.nombreGasto === '' || this.cantidad <=0){
    this.formularioIncorrecto = true;

  } else{
    // creamos el objeto
    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }
    //enviamos el objeto a los subscriptores via subject
    this._presupuestoService.agregarGasto(GASTO);

    this.formularioIncorrecto = false;
    this.nombreGasto = '';
    this.cantidad = 0;
    this.textoIncorrecto = "Nombre Gasto o cantidad Incorrecta";

  }

}

}
