import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageMainComponent } from './components/homepage-main/homepage-main.component';
import { StoriesComponent } from './components/homepage-main/stories/stories.component';
import { FeedComponent } from './components/homepage-main/feed/feed.component';

@NgModule({
  declarations: [HomepageMainComponent, StoriesComponent, FeedComponent],
  imports: [CommonModule, HomepageRoutingModule, MatIconModule],
})
export class HomepageModule {}
