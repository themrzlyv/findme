import { fireStorage } from "../config/firebase";

interface UploadFileResponse {
  url: string;
  percent: number;
}

export const uploadFile = (file: File): Promise<UploadFileResponse> => {
  return new Promise((resolve, reject) => {
    const storageRef = fireStorage.ref();
    const fileRef = storageRef.child(`images/${file.name}`);
    fileRef
      .put(file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          resolve({ url, percent: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 });
        });
      })
      .catch((error) => reject(error));
  });
};

export const deleteFile = (fileName: string) => {
  return new Promise((resolve, reject) => {
    const storageRef = fireStorage.ref();
    const fileRef = storageRef.child(`images/${fileName}`);
    fileRef
      .delete()
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((error) => reject(error));
  });
}