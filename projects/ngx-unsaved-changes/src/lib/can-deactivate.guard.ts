import { Inject, Injectable } from '@angular/core';

import { ComponentCanDeactivate } from './component-can-deactivate';
import EnvironmentConfig from './environment-config.interface';
import EnvironmentConfigService from './environment-config.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard  {
  constructor(@Inject(EnvironmentConfigService) private config: EnvironmentConfig){}

  canDeactivate(component: ComponentCanDeactivate): boolean {
    if(!component.canDeactivate()){
        if (confirm(/*"You have unsaved changes! If you leave, your changes will be lost."*/this.config.alertMessage)) {
            return true;
        } else {
            return false;
        }
    }
    
    return true;
  }
  
}
