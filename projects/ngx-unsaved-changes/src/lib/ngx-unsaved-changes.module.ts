import { ModuleWithProviders, NgModule } from '@angular/core';
import { CanDeactivateGuard } from './can-deactivate.guard';
import EnvironmentConfig from './environment-config.interface';
import EnvironmentConfigService from './environment-config.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})

export class NgxUnsavedChangesModule { 
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<NgxUnsavedChangesModule>{
    return {
      ngModule: NgxUnsavedChangesModule,
      providers: [
        CanDeactivateGuard,
        {
          provide: EnvironmentConfigService,
          useValue: config,
        }
      ],
    }
  }
}
