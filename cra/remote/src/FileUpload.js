import React, { useState } from 'react';
import { storage } from './firebase'; // Assurez-vous que le chemin est correct
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('Veuillez d\'abord sélectionner un fichier !');
      return;
    }

    const storageRef = ref(storage, `files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Erreur lors du téléversement du fichier :', error);
        alert('Erreur lors du téléversement du fichier');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          alert(`Fichier téléversé avec succès à ${downloadURL}`);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Téléverser le fichier</button>
      <progress value={uploadProgress} max="100" />
    </div>
  );
};

export default FileUpload;
