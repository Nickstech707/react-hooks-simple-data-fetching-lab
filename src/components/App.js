// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
      })
      .catch((error) => {
        console.error(error + "Error");
      });
  }, []);

  if (!image) return <p>Loading...</p>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={image} alt="A Random Dog" />
    </div>
  );
};

export default App;
