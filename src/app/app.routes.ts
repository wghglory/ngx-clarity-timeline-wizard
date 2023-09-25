import { Routes } from '@angular/router';
import { ConfigureInstanceComponent } from './configure-instance/configure-instance.component';
import { ConfigureInstanceLiveComponent } from './configure-instance-live-draft/configure-instance-live.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'configure',
    pathMatch: 'full',
  },
  {
    path: 'configure',
    component: ConfigureInstanceComponent,
  },
  {
    path: 'configure-live',
    component: ConfigureInstanceLiveComponent,
  },
];
