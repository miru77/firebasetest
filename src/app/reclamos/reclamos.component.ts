import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ReclamosService } from '../servicios/reclamos.service';
import { Reclamo } from '../modelo/reclamo';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {
  reclamosLista: Reclamo[];

  constructor(private reclamosService: ReclamosService, private toastManager: ToastsManager,
     vcr: ViewContainerRef) {
    this.toastManager.setRootViewContainerRef(vcr);
   // this.toastManager.success('Operacion Exitosa', 'ejemolo firebase');
   }

  ngOnInit() {
    this.obtenerInformacion();
  }
  obtenerInformacion() {
    console.log('metodo obtener Informacion');
    var contenido = this.reclamosService.getReclamos();
    contenido.snapshotChanges().subscribe(item => {
            this.reclamosLista = [];
      item.forEach(elemento => {
        var registro = elemento.payload.toJSON();
        registro["$key"] = elemento.key;
      this.reclamosLista.push(registro as Reclamo);
      });
   });
  }
  editar(item) {
    console.log('metodo edicion');
  }
  eliminar(item) {
    console.log('metodo eliminar');
  }
  agregar(item) {
    console.log('metodo agregar');
  }
  onSubmit(reclamoForm: NgForm) {
    console.log('metodo onSubmit' + JSON.stringify(reclamoForm.value));
     this.reclamosService.agregarReclamo(reclamoForm.value);
     this.toastManager.success('Operacion de alta Exitosa', 'ejemolo firebase');
  }
  resetForm(reclamoForm) {
    console.log('metodo resetForm');
  }


}
