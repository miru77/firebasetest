import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { ReclamosService } from './servicios/reclamos.service';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';



@NgModule({
  declarations: [
    AppComponent,
    ReclamosComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ToastModule.forRoot(),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ReclamosService, ToastsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
