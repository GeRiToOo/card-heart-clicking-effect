const card = document.querySelector('.card');
const times = document.querySelector('.times');

let clickedTimes = 0;

card.addEventListener('dblclick', (e) => {
  createHeart(e);
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  card.appendChild(heart);
  times.innerHTML = ++clickedTimes;

  setTimeout(() => {
    heart.remove();
  }, 5000);
};
