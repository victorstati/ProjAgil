import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';
import { DatetimeFormatPipePipe } from './_helps/DatetimeFormatPipe.pipe';

import { EventoService } from './_services/evento.service';



@NgModule({
  declarations: [		
    AppComponent,
    EventosComponent,
    NavComponent,
    DatetimeFormatPipePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
