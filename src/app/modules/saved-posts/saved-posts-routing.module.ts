import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedPostsMainComponent } from './components/saved-posts-main/saved-posts-main.component';

const routes: Routes = [
  {
    path: '',
    component: SavedPostsMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedPostsRoutingModule {}
