import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, DialogContent } from './app.component';

import {
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdIconModule,
      MdTooltipModule,
      MdButtonToggleModule,
      MdMenuModule,
      MdCardModule,
      MdInputModule,
      MdDatepickerModule,
      MdNativeDateModule,
      MdCheckboxModule,
      MdRadioModule,
      MdSelectModule,
      MdSlideToggleModule,
      MdTabsModule,
      MdChipsModule,
      MdProgressSpinnerModule,
      MdProgressBarModule,
      MdDialogModule,
      MdSnackBarModule
      } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  entryComponents: [ DialogContent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // MATERIAL
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
