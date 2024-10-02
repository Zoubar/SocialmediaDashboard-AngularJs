import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppService } from 'src/app/core/app.service';
import { Feed } from 'src/app/models/feed.interface';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feedsData: any;
  filteredFeeds: any;
  currentFilter: string = 'all';
  private subscriptions = new Subscription();

  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.myService.getAllFeeds().subscribe((feeds: Feed) => {
        this.feedsData = feeds;
        this.filteredFeeds = this.feedsData?.feeds?.all;
      })
    );
  }

  filterFeeds(filter: string): void {
    switch (filter) {
      case 'all':
        this.filteredFeeds = this.feedsData?.feeds?.all;
        this.currentFilter = filter;
        break;
      case 'following':
        this.filteredFeeds = this.feedsData?.feeds?.following;
        this.currentFilter = filter;
        break;
      case 'newest':
        this.filteredFeeds = this.feedsData?.feeds?.newest;
        this.currentFilter = filter;
        break;
      case 'popular':
        this.filteredFeeds = this.feedsData?.feeds?.popular;
        this.currentFilter = filter;
        break;
      default:
        this.filteredFeeds = this.feedsData?.feeds?.all;
        this.currentFilter = filter;
    }
  }

  // toggling like btn method
  toggleLike(item: Post): void {
    item.likedByOwner = !item.likedByOwner;
    // the incrementor and the decrementor of the like btn.
    item.likes += item.likedByOwner ? 1 : -1;
  }

  ngOnDestroy(): void {
    // unsubscribing from the subscription made above
    this.subscriptions.unsubscribe();
  }
}
