import React, { useState, useEffect } from "react";
import Photo from "./Photo";
const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <h2 className="text-center">All Photos</h2>
      <div class="row">
        {photos.map((photo) => (
          <Photo key={photo.id} data={photo} />
        ))}
      </div>
    </div>
  );
};
export default Photos;
