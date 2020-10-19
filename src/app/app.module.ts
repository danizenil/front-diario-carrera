import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiarioComponent } from './diario/diario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SesionesService } from './diario/sesiones.service';
import { GeneradorEntrenamientoComponent } from './generador-entrenamiento/generador-entrenamiento.component'
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './diario/form.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'diario', component: DiarioComponent },
  { path: 'generador', component: GeneradorEntrenamientoComponent },
  { path: 'diario/formulario', component: FormComponent },
  { path: 'diario/formulario/:id', component: FormComponent },
  { path: '', pathMatch:'full', redirectTo: 'DiarioComponent' }
];

@NgModule({
  declarations: [
    AppComponent,
    DiarioComponent,
    HeaderComponent,
    FooterComponent,
    GeneradorEntrenamientoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SesionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
