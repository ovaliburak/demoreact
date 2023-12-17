import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayImage from './DisplayImage';
import ImageUpload from './ImageUpload'; // Adjust the path as necessary
// ... other imports ...

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for DisplayImage */}
            <Route path="/" element={<ImageUpload />} />
        <Route path="/image/:imageId" element={<DisplayImage />} />
        {/* You can add more routes here for other components */}
      </Routes>
    </Router>
  );
}

export default App;

