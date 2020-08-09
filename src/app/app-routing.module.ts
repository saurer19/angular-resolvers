import { SearchGuard } from './guards/search.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ':search',
    canLoad: [SearchGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'sales',
        data: { subSearch: 'sales' },
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
    ],
  },

  {
    path: ':search/:state',
    canLoad: [SearchGuard],
    loadChildren: () =>
      import('./state/state.module').then((m) => m.StateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
