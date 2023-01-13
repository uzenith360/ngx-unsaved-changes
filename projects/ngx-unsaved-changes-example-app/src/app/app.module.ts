import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUnsavedChangesModule } from 'ngx-unsaved-changes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { ExampleNextPageComponent } from './example-next-page/example-next-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    ExampleNextPageComponent
  ],
  imports: [
    NgxUnsavedChangesModule.forRoot(
      {
        alertMessage: 'You have unsaved changes! If you leave, your changes will be lost.'
      },
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
