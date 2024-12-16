import { Component } from '@angular/core';
import { FormCanDeactivate } from 'ngx-unsaved-changes';

@Component({
    selector: 'app-example-page',
    templateUrl: './example-page.component.html',
    styleUrls: ['./example-page.component.css'],
    standalone: false
})
export class ExamplePageComponent extends FormCanDeactivate {
  isUnsavedChanges: boolean = true;

  constructor() {
    super();
  }
}
