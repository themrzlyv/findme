export interface iCreatePost {
  title: string;
  content: string;
  tags: string[];
  category: string;
  image: string;
}

export interface iPost {
  title: string;
  content: string;
  tags: string[];
  category: string;
  image: string;
}

export interface iPostState {
  posts: iPost[];
}