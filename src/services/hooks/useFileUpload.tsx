import { useState } from 'react';
import { deleteFile, uploadFile } from '../api/api.file';

const useFileUpload = () => {
  const [fileUrl, setFileUrl] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [progress, setProgress] = useState<number>(0);

  const onFileChange = (file: File) => {
    setProgress(0);
    setLoading(true);
    setError('');
    setFileName(file.name);
    uploadFile(file)
      .then(({ url, percent }) => {
        setFileUrl(url);
        setProgress(percent);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setError(error);
        setProgress(0);
        setLoading(false);
      });
  };

  const removeFile = (name: string) => {
    setLoading(true);
    deleteFile(name)
      .then(() => {
        setFileUrl('');
        setFileName('');
        setProgress(0);
        setLoading(false);
        setError('');
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return { onFileChange, fileUrl, progress, error, loading, fileName, removeFile };
};

export default useFileUpload;
