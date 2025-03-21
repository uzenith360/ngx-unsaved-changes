import { Component } from '@angular/core';
import { FormCanDeactivate } from 'ngx-unsaved-changes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-example-page',
    templateUrl: './example-page.component.html',
    styleUrls: ['./example-page.component.css'],
    imports: [RouterLink]
})
export class ExamplePageComponent extends FormCanDeactivate {
  isUnsavedChanges: boolean = true;

  constructor() {
    super();
  }
}
