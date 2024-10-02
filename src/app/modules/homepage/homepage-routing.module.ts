import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageMainComponent } from './components/homepage-main/homepage-main.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageMainComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
