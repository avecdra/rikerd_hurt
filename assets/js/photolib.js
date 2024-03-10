const photoContainer = document.querySelector('.photo-container');
const next = document.querySelector('.next');

let currentMemeIndex = 0;
const memes = [  // Array to store image paths
  "../assets/images/memes/rikerd3.png",
  "../assets/images/memes/rikerd1.png",
  "../assets/images/memes/rikerd4.png",
  // Add more meme image paths here
];

function showMeme(index) {
  photoContainer.innerHTML = `<img src="${memes[index]}" alt="Meme ${index + 1}">`;
}

showMeme(currentMemeIndex); // Display first meme initially

nextButton.addEventListener('click', () => {
  currentMemeIndex++;
  if (currentMemeIndex >= memes.length) {
    currentMemeIndex = 0; // Loop back to the first meme
  }
  showMeme(currentMemeIndex);
});