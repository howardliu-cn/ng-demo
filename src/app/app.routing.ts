import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cms', loadChildren: './cms/cms.module#CmsModule' },
  { path: '**', component: HomeComponent }
];
