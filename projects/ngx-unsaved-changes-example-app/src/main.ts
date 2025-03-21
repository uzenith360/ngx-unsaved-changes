import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { NgxUnsavedChangesModule } from 'ngx-unsaved-changes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(NgxUnsavedChangesModule.forRoot({
            alertMessage: 'You have unsaved changes! If you leave, your changes will be lost.'
        }), BrowserModule, AppRoutingModule)]
})
  .catch(err => console.error(err));
