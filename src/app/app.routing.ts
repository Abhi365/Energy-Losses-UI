import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reports', loadChildren: 'app/table/table.module#TableModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);