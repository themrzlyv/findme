import { iCreatePost, iPost } from "../../ui/pages/Post/common/@types";
import { firestore } from "../config/firebase";

export const createPost = (reqData: iCreatePost) => {
  return new Promise((resolve,reject) => {
      firestore
          .collection('posts')
          .add(reqData)
          .then((result) => result.get())
          .then((post) => resolve(post.exists))
          .catch(err => reject(err));
  })
}

export const fetchPosts = (): Promise<iPost[]> => {
  return new Promise((resolve,reject) => {
      firestore
          .collection('posts')
          .get()
          .then((result) => result.docs)
          .then((posts) => posts.map(post => ({ ...post.data(), id: post.id })))
          .then((result) => resolve(result as iPost[]))
          .catch(err => reject(err));
  });
}

export const fetchPost = (id: string): Promise<iPost> => {
  return new Promise((resolve,reject) => {
      firestore
          .collection('posts')
          .doc(id)
          .get()
          .then((result) => result.exists ? result.data() : null)
          .then((result) => resolve(result as iPost))
          .catch(err => reject(err));
  });
}