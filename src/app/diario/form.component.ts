import { Component, OnInit } from '@angular/core';
import { Sesion } from './sesion';
import {Router, ActivatedRoute} from '@angular/router';
import { SesionesService } from './sesiones.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string="Nueva Sesión";
  public sesion: Sesion=new Sesion();
  constructor(
    private sesionService: SesionesService, 
    private router:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  
  cargarCliente(): void{
    this.activateRoute.params.subscribe(params=>{
      let id=params['id'];
      if(id){
        this.sesionService.getSesion(id).subscribe(sesion=>this.sesion=sesion)
      }
    }
      )
  }

  public save():void{
    this.sesionService.create(this.sesion).subscribe(
      response=>this.router.navigate(['/diario'])      
    );
    Swal.fire('Registro guardado','Registro '.concat(this.sesion.fecha," salvado"), 'success');
  }
  update():void{
    this.sesionService.update(this.sesion).subscribe(
      sesion=>this.router.navigate(['/diario'])
    );
    Swal.fire('Registro actualizado','Registro '.concat(this.sesion.fecha," actualizado"), 'success');
  } 
}
