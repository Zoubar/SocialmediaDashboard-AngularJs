export interface Post {
  id: number;
  user: string;
  postOwnerImageUrl: string;
  imageUrl: string;
  likes: number;
  comments: number;
  likedByOwner: boolean;
}
