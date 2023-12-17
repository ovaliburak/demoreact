import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Assuming the response contains the image ID
      const imageId = response.data.id; // Adjust this based on your actual response structure
      navigate(`/image/${imageId}`); // Navigate to the DisplayImage component with the new image ID
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUpload;

