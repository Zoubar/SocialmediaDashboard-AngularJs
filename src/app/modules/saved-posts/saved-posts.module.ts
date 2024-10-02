import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedPostsRoutingModule } from './saved-posts-routing.module';
import { SavedPostsMainComponent } from './components/saved-posts-main/saved-posts-main.component';


@NgModule({
  declarations: [
    SavedPostsMainComponent
  ],
  imports: [
    CommonModule,
    SavedPostsRoutingModule
  ]
})
export class SavedPostsModule { }
