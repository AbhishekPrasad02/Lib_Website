const images = [
   "image\gallery\e1.jpg",
   "image\gallery\e2.jpg",
   "image\gallery\e1.jpg",
   "image\gallery\e2.jpg"
  ];
  
  const interval = 1000; // Change image every 3 seconds
  
  let index = 0;
  const image = document.getElementById('image');
  
  setInterval(() => {
    index = (index + 1) % images.length;
    image.src = images[index];
  }, interval);