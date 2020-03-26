import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayGridComponent } from './components/display-grid/display-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ButtonRendererComponent } from './services/button-renderer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './services/numberOnly.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGridComponent,
    AddEditUserComponent,
    ButtonRendererComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
