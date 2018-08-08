import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import {BoardComponent} from '../app/board/board.component';
import {CellComponent} from '../app/cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
