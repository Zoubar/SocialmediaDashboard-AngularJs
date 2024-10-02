import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppService } from 'src/app/core/app.service';
import { Suggestion } from 'src/app/models/suggestion.interface';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss'],
})
export class RightNavComponent implements OnInit {
  suggestionsData: any;
  private subscriptions = new Subscription();

  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.myService
        .getAllSuggestions()
        .subscribe((suggestion: Suggestion[]) => {
          this.suggestionsData = suggestion;
        })
    );
  }

  // toggling follow btn method
  toggleFollow(item: Suggestion): void {
    item.follow = !item.follow;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
