let followers = 0;
let likes = 0;
let photos = 0;

let p_followers = document.querySelector('.followers');
let p_likes = document.querySelector('.likes');
let p_photos = document.querySelector('.photos');

setInterval(() => {
  if (followers <= 80000) {
    followers += 1000;
    p_followers.innerHTML = formatNumbers(followers);
  }
  if (likes <= 803000) {
    likes += 10000;
    p_likes.innerHTML = formatNumbers(likes);
  }
  if (photos <= 1400) {
    photos += 10;
    p_photos.innerHTML = formatNumbers(photos);
  }
}, 10);

function formatNumbers(number) {
  let number_format = '';
  if (number >= 1000 && number < 1000000) {
    number_format = (number / 1000).toFixed(1) + 'K';
  } else {
    number_format = number.toString();
  }

  return number_format.replace(/\.0+([K])$/, '$1');
}