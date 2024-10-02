import { Post } from './post.interface';

export interface Feed {
  all: Post[];
  following: Post[];
  newest: Post[];
  popular: Post[];
}
