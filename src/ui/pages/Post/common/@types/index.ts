export interface iCreatePost {
  title: string;
  content: string;
  tags: string[];
  category: string;
  image: string;
}

export interface iPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  category: string;
  image: string;
}

export interface iPostState {
  posts: iPost[];
  post: iPost | null;
  isLoading: boolean;
  error: string | null;
}