import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppService } from 'src/app/core/app.service';
import { Story } from 'src/app/models/story.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  storiesData: any;
  private subscriptions = new Subscription();

  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.myService.getAllStories().subscribe((stories: Story[]) => {
        this.storiesData = stories;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
