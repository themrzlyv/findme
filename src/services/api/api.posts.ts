import { iCreatePost } from "../../ui/pages/Post/common/@types";
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