const images = [
    "https://picsum.photos/id/237/1920/1080",
    "https://picsum.photos/id/238/1920/1080",
    "https://picsum.photos/id/239/1920/1080",
    "https://picsum.photos/id/240/1920/1080"
  ];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${chosenImage})`;
  


