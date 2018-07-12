import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { Reclamo } from '../modelo/reclamo';


@Injectable()
export class ReclamosService {

  reclamoList: AngularFireList<any>;
  selectedReclamo: Reclamo = new Reclamo();
  constructor(private angularFireDatabase: AngularFireDatabase) {

   }
  // retorna todos los reclamos
   getReclamos() {
      return this.reclamoList = this.angularFireDatabase.list('reclamo');
   }
//  agregar  q reclam
// getReclamo(identificador: any) {

// }
// agregar reclamo
agregarReclamo( request: Reclamo ) {
  this.reclamoList.push({
    titulo: request.titulo,
    texto: request.texto,
    locacion: request.locacion
  });

}
// actualizacion de reclamo
actualizarReclamo(identificador: any, request: Reclamo) {
  this.reclamoList.update(identificador, {
    titulo: request.titulo,
    texto: request.texto,
    locacion: request.locacion
  });
}
// eliminar reclamo
eliminarReclamo(identificador: any) {
  this.reclamoList.remove(identificador);
}

}
