import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPostsMainComponent } from './saved-posts-main.component';

describe('SavedPostsMainComponent', () => {
  let component: SavedPostsMainComponent;
  let fixture: ComponentFixture<SavedPostsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPostsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPostsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
