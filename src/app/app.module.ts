import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@angular/cdk/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { RoosterListComponent } from './components/rooster-list/rooster-list.component';
import { RoosterPreviewComponent } from './components/rooster-preview/rooster-preview.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { RoosterCreateDialogComponent } from './components/rooster-create-dialog/rooster-create-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RoosterListComponent,
    RoosterPreviewComponent,
    HeaderComponent,
    PageNotFoundComponent,
    RoosterCreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    DialogModule,
    MatStepperModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
