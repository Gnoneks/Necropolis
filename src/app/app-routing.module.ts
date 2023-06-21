import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoosterPreviewComponent } from './components/rooster-preview/rooster-preview.component';
import { RoosterListComponent } from './components/rooster-list/rooster-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/roosters',
    pathMatch: 'full',
  },
  {
    path: 'roosters',
    component: RoosterListComponent,
  },
  {
    path: 'roosters/:rooster',
    component: RoosterPreviewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
