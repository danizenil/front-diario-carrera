import { Component, OnInit } from '@angular/core';
import {SesionesService} from './sesiones.service'
import {Sesion} from './sesion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  sesiones: Sesion[];
  constructor(private sesionesService: SesionesService) { }
  ngOnInit(): void {
    this.sesionesService.getSesiones().subscribe(
      sesiones=>this.sesiones=sesiones
    );
  }

  delete(sesion:Sesion):void{

    Swal.fire({
      title: 'Estas seguro?',
      text: 'El registro será eliminado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, mantener'
    }).then((result) => {
      if (result.value) {
        this.sesionesService.delete(sesion.id).subscribe(
          response=>{
       this.sesiones=this.sesiones.filter(ses=>ses !==sesion)
        Swal.fire(
          'Borrado!',
          'El registro ha sido Heliminado.',
          'success'
        )
          }
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })

  }

}
