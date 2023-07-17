let slider = document.querySelector('.slider');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');

// Move to the previous slide
prevButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -300, // Adjust the scroll distance based on the slide width
    behavior: 'smooth'
  });
});

// Move to the next slide
nextButton.addEventListener('click', () => {
  slider.scrollBy({
    left: 300, // Adjust the scroll distance based on the slide width
    behavior: 'smooth'
  });
});
