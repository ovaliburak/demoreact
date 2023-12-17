import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DisplayImage() {
  const [imageUrl, setImageUrl] = useState('');
  const { imageId } = useParams(); // Get imageId from URL parameters

  useEffect(() => {
    if (imageId) {
      const fetchImage = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/image/${imageId}`, {
            responseType: 'blob'
          });
          setImageUrl(URL.createObjectURL(response.data));
        } catch (error) {
          console.error('Error fetching the image:', error);
        }
      };

      fetchImage();
    }
  }, [imageId]);

  return imageUrl ? <img src={imageUrl} alt="Uploaded" /> : <p>Loading...</p>;
}

export default DisplayImage;

