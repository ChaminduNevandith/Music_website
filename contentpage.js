
    const photos = document.querySelectorAll('.photo');
    let activePhoto = null;

    photos.forEach(photo => {
      const infoBox = photo.querySelector('div');
      photo.addEventListener('mouseover', () => {
        if (activePhoto !== null && activePhoto !== photo) {
          const activeInfoBox = activePhoto.querySelector('div');
          activeInfoBox.classList.remove('show');
        }
        infoBox.classList.toggle('show');
        activePhoto = photo;
      });
    });



  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const color = box.getAttribute('data-color');
      document.body.style.backgroundColor = color;
    });
  });



  const fonts = document.querySelectorAll('.font');
  fonts.forEach(font => {
    font.addEventListener('click', () => {
      const size = font.getAttribute('data-size');
      document.body.style.fontSize = size + "px";
    });
  });

  const boxR = document.querySelector(".boxR");

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      // Generate high values for red, green, and blue components
      for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 6) + 9] + letters[Math.floor(Math.random() * 6) + 9];
      }
      return color;
    }   
boxR.addEventListener("click", function() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  boxR.style.backgroundColor = randomColor;
});

