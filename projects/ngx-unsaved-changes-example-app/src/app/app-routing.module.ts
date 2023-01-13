import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'ngx-unsaved-changes';
import { ExampleNextPageComponent } from './example-next-page/example-next-page.component';
import { ExamplePageComponent } from './example-page/example-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ExamplePageComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'next', component: ExampleNextPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
