import React, { useEffect, useState } from 'react';
import { storage } from './firebase'; // Assurez-vous que le chemin est correct
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import styled from 'styled-components';

const ImageGrid = styled('div')`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 20px;
`;

const ImageWrapper = styled('div')`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const storageRef = ref(storage, 'files/');
      try {
        const res = await listAll(storageRef);
        const filePromises = res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url: url
          };
        });
        const files = await Promise.all(filePromises);
        setFiles(files);
      } catch (error) {
        console.error('Erreur lors de la récupération des fichiers :', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Liste des fichiers téléversés</h2>
      <ImageGrid>
        {files.map((file) => (
          <ImageWrapper key={file.name}>
            <StyledImage src={file.url} alt={file.name} />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </div>
  );
};

export default FileList;
